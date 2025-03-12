import styled from "styled-components";

export const ViewStyle = styled('div')`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    margin: auto;

    .text_tool_container {
        display: flex;
        flex-direction: column;
        align-items: center;

        textarea {
            width: 400px;
            height: 500px;
            padding: 45px 10px 10px;
            border: 2px solid #000000;
            border-radius: 10px;
            background-color: #c7c2c2;
            outline: none;
        }

        .text_input_area {
            display: flex;
            align-items: end;
            margin-bottom: 30px;

            .icon {
                margin-bottom: 250px;
                color: #ffffff;
                font-size: 2.5rem;
            }

            .text_input_section {
                position: relative;
                margin: 20px 40px;
            }
            
            .text_result_section {
                position: relative;

                .text_simple_area {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .tooltip_message {
                        position: absolute;
                        top: -24px;
                        right: 60px;
                        height: 25px;
                        font-size: 11px;
                        font-weight: bold;
                        background: rgb(28 28 31 / 1);
                        color: #c97874;
                        padding: 5px 8px;
                        border-radius: 10px;
                        opacity: 0;
                        pointer-events: none;
                        z-index: 0;

                        &::before {
                            position: absolute;
                            content: "";
                            height: 8px;
                            width: 8px;
                            background: rgb(28 28 31 / 1);
                            bottom: -3px;
                            left: 32%;
                            transform: translate(-50%) rotate(45deg);
                        }
                    }

                    .tooltip_message.active {
                        animation: twink 3s ease-in;
                    }
                }
            }

            .text_section_header {
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 400px;
                height: 40px;
                padding: 0 5px 0 10px;
                border: 2px solid #000000;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                background-color: #ffffff;

                button {
                    margin: 0 5px;
                }

                .header_title {
                    color: #000000;
                    font-size: 1.5rem;
                }
            }
        }

        .text_option_area {
            display: flex;
            justify-content: center;
            align-items: start;
            justify-content: center;
            width: 600px;
            height: 90px;
            padding: 0 10px;
            border: 2px solid grey;
            border-radius: 10px;
            background-color: #c7c2c2;

            select {
                width: 120px;
                margin: 10px;
            }

            input {
                width: 120px;
                margin: 10px;
            }

            button {
                width: 120px;
                border: none;
            }

            .text_option_section {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: calc(100% / 4);
                height: 100%;

                button {
                    width: 100%;
                    height: 100%;
                    margin: 10px;
                    border-radius: 5px;
                }
            }
        }
    }

    @keyframes twink {
        1% {
            opacity: 1;
        }
        70% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`