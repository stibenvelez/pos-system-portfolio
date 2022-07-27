import React, {
    FC,
    ImgHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react";
import checkInViewIntersectionObserver from "../../helpers/isInViewPortIntersectionObserver";


export interface NcImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
}

const NcImage: FC<NcImageProps> = ({
    containerClassName = "object-cover aspect-w-1 aspect-h-1",
    alt = "nc-imgs",
    src = "",
    className = "object-cover",
    ...args
}) => {
    let isMounted = false;
    const _containerRef = useRef(null);
    let _imageEl: HTMLImageElement | null = null;
    // const darkmodeState = useAppSelector(selectDarkmodeState);

    const [__src, set__src] = useState("");
    const [imageLoaded, setImageLoaded] = useState(false);

    const _initActions = async () => {
        // set__src(placeholderImage);
        _checkInViewPort();
    };

    const _checkInViewPort = () => {
        if (!_containerRef.current) return;
        checkInViewIntersectionObserver({
            target: _containerRef.current as any,
            options: {
                root: null,
                rootMargin: "0%",
                threshold: 0,
            },
            freezeOnceVisible: true,
            callback: _imageOnViewPort,
        });
    };

    const _imageOnViewPort = () => {
        if (!src) {
            _handleImageLoaded();
            return true;
        }
        _imageEl = new Image();
        if (_imageEl) {
            _imageEl.src = src;
            _imageEl.addEventListener("load", _handleImageLoaded);
        }
        return true;
    };

    const _handleImageLoaded = () => {
        if (!isMounted) return;
        setImageLoaded(true);
        set__src(src);
    };

    useEffect(() => {
        isMounted = true;
        _initActions();
        return () => {
            isMounted = false;
        };
    }, [src]);

    const renderLoadingPlaceholder = () => {
        return (
            <div
                className={`${className} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500 `}
            >
                <div className="h-full ">
                    <img
                        src={`${
                            import.meta.env.VITE_PUBLIC_URL
                        }/img/products/productDefault.png`}
                        alt="alt"
                        className="h-full"
                    />
                </div>
            </div>
        );
    };

    return (
        <div
            className={`nc-NcImage ${containerClassName} `}
            data-nc-id="NcImage"
            ref={_containerRef}
        >
            {__src && imageLoaded ? (
                <img src={__src} className={className} alt={alt} {...args} />
            ) : (
                renderLoadingPlaceholder()
            )}
        </div>
    );
};

export default NcImage;
