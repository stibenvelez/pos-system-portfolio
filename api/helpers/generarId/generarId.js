const generarId = () => {
    const radom = Math.random().toString(32).substring(2);
    const fecha = Date.now().toString(32);

    return radom + fecha;
};

export default generarId;
