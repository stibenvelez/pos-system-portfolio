import React from "react";
import styled from "@emotion/styled";
import FormLogin from "../../components/auth/FormLogin";
import img from "/img/app/auto.jpg";

const Background = styled.div`
    background: linear-gradient(
            90deg,
            rgba(27, 27, 27, 0.8) 0%,
            rgba(40, 40, 40, 0.5) 48%
        ),
        url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const LoginPage = () => {
    return (
        <div>
            <Background className="flex items-center justify-center w-full min-h-screen bg-slate-900">
                <FormLogin />
            </Background>
        </div>
    );
};

export default LoginPage;
