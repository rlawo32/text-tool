'use client';

import styled from "styled-components";

import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight as arrowIcon } from "@fortawesome/free-solid-svg-icons";

const ViewStyle = styled('div')`
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
            margin: 10px;
            padding: 45px 10px 10px;
            border: 2px solid #000000;
            border-radius: 10px;
            outline: none;
        }

        .text_input_area {
            display: flex;
            align-items: end;

            .icon {
                margin-bottom: 250px;
                color: #ffffff;
                font-size: 2.5rem;
            }

            .text_input_section {
                position: relative;
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
                top: 10px;
                right: 10px;
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
                    font-size: 1.4rem;
                    font-weight: bold;
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

const View = () => {

    const [textMode, setTextMode] = useState<string>("I");
    const [textInput, setTextInput] = useState<string>("");
    const [textResult, setTextResult] = useState<string>("");
    const [textOption1, setTextOption1] = useState<string>("O");
    const [textOption2, setTextOption2] = useState<string>("F");
    const [textOrder, setTextOrder] = useState<string>("");
    const [textInterval, setTextInterval] = useState<number>(0);
    const [textSpecific, setTextSpecific] = useState<string>("");
    const [textTooltip, setTextTooltip] = useState<boolean>(false);

    const textConversion = () => {
        const conversionOrigin:string = textOption1 === 'G' ? textInput : textInput.replace(/ /g,"");
        const conversionOrder:string = textOrder;
        let conversionResult:string = "";

        const arr:string[] = conversionOrigin.split('');

        if(textOption1 === 'O') {
            for(let word of arr) {
                if(textOption2 === 'F') {
                    conversionResult += conversionOrder + word;
                } else if(textOption2 === 'B') {
                    conversionResult += word + conversionOrder;
                } else if(textOption2 === 'A') {
                    conversionResult += conversionOrder + word + conversionOrder;
                }
            }
        } else if(textOption1 === 'I') {
            for(let i=0; i<arr.length; i+=textInterval) {
                if(textOption2 === 'F') {
                    conversionResult += conversionOrder + conversionOrigin.substring(i, i+textInterval);
                } else if(textOption2 === 'B') {
                    conversionResult += conversionOrigin.substring(i, i+textInterval) + conversionOrder;
                } else if(textOption2 === 'A') {
                    conversionResult += conversionOrder + conversionOrigin.substring(i, i+textInterval) + conversionOrder;
                }
            }
        } else if(textOption1 === 'S') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, conversionOrder + textSpecific);
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, textSpecific + conversionOrder);
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, conversionOrder + textSpecific + conversionOrder);
            }
        } else if(textOption1 === 'N') {
            const arr1:string[] = textInput.split('');
            for(let word of arr1) {
                if(/[0-9]/.test(word)) {
                    if(textOption2 === 'F') {
                        conversionResult += conversionOrder + word;
                    } else if(textOption2 === 'B') {
                        conversionResult += word + conversionOrder;
                    } else if(textOption2 === 'A') {
                        conversionResult += conversionOrder + word + conversionOrder;
                    }
                    console.log(conversionResult);
                } else {
                    conversionResult += word;
                }
            }
        } else if(textOption1 === 'L') {
            const arr1:string[] = textInput.split('');
            for(let word of arr1) {
                if(/[a-z]/.test(word)) {
                    if(textOption2 === 'F') {
                        conversionResult += conversionOrder + word;
                    } else if(textOption2 === 'B') {
                        conversionResult += word + conversionOrder;
                    } else if(textOption2 === 'A') {
                        conversionResult += conversionOrder + word + conversionOrder;
                    }
                    console.log(conversionResult);
                } else {
                    conversionResult += word;
                }
            }
        } else if(textOption1 === 'U') {
            const arr1:string[] = textInput.split('');
            for(let word of arr1) {
                if(/[A-Z]/.test(word)) {
                    if(textOption2 === 'F') {
                        conversionResult += conversionOrder + word;
                    } else if(textOption2 === 'B') {
                        conversionResult += word + conversionOrder;
                    } else if(textOption2 === 'A') {
                        conversionResult += conversionOrder + word + conversionOrder;
                    }
                    console.log(conversionResult);
                } else {
                    conversionResult += word;
                }
            }
        } else if(textOption1 === 'K') {
            const arr1:string[] = textInput.split('');
            for(let word of arr1) {
                if(/[ㄱ-힣]/.test(word)) {
                    if(textOption2 === 'F') {
                        conversionResult += conversionOrder + word;
                    } else if(textOption2 === 'B') {
                        conversionResult += word + conversionOrder;
                    } else if(textOption2 === 'A') {
                        conversionResult += conversionOrder + word + conversionOrder;
                    }
                    console.log(conversionResult);
                } else {
                    conversionResult += word;
                }
            }
        } else if(textOption1 === 'E') {
            const arr1:string[] = textInput.split('');
            for(let word of arr1) {
                if(/\n/.test(word)) {
                    if(textOption2 === 'F') {
                        conversionResult += conversionOrder + word;
                    } else if(textOption2 === 'B') {
                        conversionResult += word + conversionOrder;
                    } else if(textOption2 === 'A') {
                        conversionResult += conversionOrder + word + conversionOrder;
                    }
                    console.log(conversionResult);
                } else {
                    conversionResult += word;
                }
            }
        } else if(textOption1 === 'G') {
            const arr1:string[] = textInput.split('');
            for(let word of arr1) {
                if(/\s/.test(word)) {
                    if(textOption2 === 'F') {
                        conversionResult += conversionOrder + word;
                    } else if(textOption2 === 'B') {
                        conversionResult += word + conversionOrder;
                    } else if(textOption2 === 'A') {
                        conversionResult += conversionOrder + word + conversionOrder;
                    }
                    console.log(conversionResult);
                } else {
                    conversionResult += word;
                }
            }
        }

        setTextResult(conversionResult);
    }

    const textRemove = () => {
        const conversionOrigin:string = textInput.replace(/ /g,"");
        const conversionOrder:string = textOrder;
        let conversionResult:string = "";

        const arr:string[] = conversionOrigin.split('');

        if(textOption1 === 'O') {
            for(let word of arr) {
                if(textOption2 === 'F') {
                    conversionResult += conversionOrder + word;
                } else if(textOption2 === 'B') {
                    conversionResult += word + conversionOrder;
                } else if(textOption2 === 'A') {
                    conversionResult += conversionOrder + word + conversionOrder;
                }
            }
        } else if(textOption1 === 'I') {
            for(let i=0; i<arr.length; i+=textInterval) {
                if(textOption2 === 'F') {
                    conversionResult += conversionOrder + conversionOrigin.substring(i, i+textInterval);
                } else if(textOption2 === 'B') {
                    conversionResult += conversionOrigin.substring(i, i+textInterval) + conversionOrder;
                } else if(textOption2 === 'A') {
                    conversionResult += conversionOrder + conversionOrigin.substring(i, i+textInterval) + conversionOrder;
                }
            }
        } else if(textOption1 === 'S') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, '');
            }
        } else if(textOption1 === 'N') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[0-9]/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[0-9]/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[0-9]/g, '');
            }
        } else if(textOption1 === 'L') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[a-z]/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[a-z]/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[a-z]/g, '');
            }
        } else if(textOption1 === 'U') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[A-Z]/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[A-Z]/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[A-Z]/g, '');
            }
        } else if(textOption1 === 'K') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[ㄱ-힣]/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[ㄱ-힣]/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[ㄱ-힣]/g, '');
            }
        } else if(textOption1 === 'E') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/\n/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/\n/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/\n/g, '');
            }
        } else if(textOption1 === 'G') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/\s/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/\s/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/\s/g, '');
            }
        }

        setTextResult(conversionResult);
    }

    const textMove = () => {
    }

    useEffect(() => {
        if(textMode === 'I') setTextOption1('O');
        else if(textMode === 'D') setTextOption1('S');
        else if(textMode === 'U') setTextOption1('S');
    }, [textMode])

    return (
        <ViewStyle>
            <div className="text_tool_container">
                <div className="text_input_area">
                    <div className="text_input_section">
                        <div className="text_section_header">
                            <div className="header_title">
                                Enter Text
                            </div>
                        </div>
                        <textarea style={{resize : "none"}} value={textInput} onChange={(e) => setTextInput(e.target.value)}></textarea>
                    </div>
                    <FontAwesomeIcon icon={arrowIcon} className="icon" />
                    <div className="text_result_section">
                        <div className="text_section_header">
                            <div className="header_title">
                                Text Result
                            </div>
                            <div className="text_simple_area">
                                <CopyToClipboard text={textResult}>
                                    <button onClick={() => {setTextTooltip(true); setTimeout(() => {setTextTooltip(false)}, 3000);}}>
                                        <div className={textTooltip ? "tooltip_message active" : "tooltip_message"}>
                                            클립보드로 복사되었습니다.
                                        </div>
                                        결과 복사
                                    </button>
                                </CopyToClipboard>
                                <button onClick={() => setTextInput(textResult)}>입력창으로 이동</button>
                            </div>
                        </div>
                        <textarea style={{resize : "none"}} value={textResult} readOnly={true}></textarea>
                    </div>
                </div>
                <div className="text_option_area">
                    <div className="text_option_section">
                        <select onChange={(e) => setTextMode(e.target.value)}>
                            <option value="I">문자 추가</option>
                            <option value="D">문자 제거</option>
                            <option value="U">문자 수정</option>
                        </select>
                        {
                            textMode !== "D" ? <input type="text" value={textOrder} onChange={(e) => setTextOrder(e.target.value)} placeholder={textMode === 'I' ? "word to add" : "word to change"} /> : <input type="text" style={{opacity:0}} />
                        }
                    </div>
                    <div className="text_option_section">
                        <select value={textOption1} onChange={(e) => setTextOption1(e.target.value)}>
                            {
                                textMode === 'I' ? 
                                    <>
                                        <option value="O">1문자</option>
                                        <option value="I">N문자</option>
                                    </> : <></>
                            }
                            <option value="S">특정 문자</option>
                            <option value="N">숫자</option>
                            <option value="L">영소문자</option>
                            <option value="U">영대문자</option>
                            <option value="K">한글</option>
                            <option value="E">개행</option>
                            <option value="G">공백</option>
                        </select>
                        {
                            textOption1 === "I" ? <input type="number" value={textInterval} onChange={(e) => setTextInterval(e.target.valueAsNumber)} /> :
                            textOption1 === "S" ? <input type="text" value={textSpecific} onChange={(e) => setTextSpecific(e.target.value)} /> : <input type="text" style={{opacity:0}} />
                        }
                    </div>
                    {
                        textMode === 'I' ?
                            <div className="text_option_section">
                                <select onChange={(e) => setTextOption2(e.target.value)}>
                                    <option value="F">문자 앞</option>
                                    <option value="B">문자 뒤</option>
                                    <option value="A">문자 앞뒤</option>
                                </select>
                                <input type="text" style={{opacity:0}} />
                            </div> : <div className="text_option_section"></div>
                    }
                    <div className="text_option_section">
                        {
                            textMode === "I" ? <button onClick={() => textConversion()}>변환</button> : 
                            textMode === "D" ? <button onClick={() => textRemove()}>제거</button> :
                            textMode === "U" ? <button onClick={() => textRemove()}>수정</button> : <></>
                        }
                    </div>
                </div>
            </div>
        </ViewStyle>
    )
}

export default View;
