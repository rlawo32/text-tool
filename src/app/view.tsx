'use client';

import * as Style from "./view.style";

import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight as arrowIcon } from "@fortawesome/free-solid-svg-icons";

const View = () => {

    const [textMode, setTextMode] = useState<string>("I");
    const [textInput, setTextInput] = useState<string>("");
    const [textResult, setTextResult] = useState<string>("");
    const [textOption1, setTextOption1] = useState<string>("O");
    const [textOption2, setTextOption2] = useState<string>("");
    const [textOrder, setTextOrder] = useState<string>("");
    const [textInterval, setTextInterval] = useState<number>(0);
    const [textSpecific, setTextSpecific] = useState<string>("");
    const [textTooltip, setTextTooltip] = useState<boolean>(false);

    const textConversion = () => {
        const conversionOrigin:string = textOption1 === 'G' ? textInput : textInput.replace(/ /g,"");
        const conversionOrder:string = textOrder;
        let conversionResult:string = "";

        const arr:string[] = conversionOrigin.split('');

        if(textOption1 === 'S' && textSpecific.length < 1) {
            alert('특정 문자를 입력해주세요.');
            return false;
        }

        if(textOption2 === 'NONE') {
            alert('추가할 위치를 정해주세요.');
            return false;
        }

        if(textOption1 === 'O') {
            for(const word of arr) {
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
            for(const word of arr1) {
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
        } else if(textOption1 === 'E') {
            const arr1:string[] = textInput.split('');
            for(const word of arr1) {
                if(/[a-zA-Z]/.test(word)) {
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
            for(const word of arr1) {
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
            for(const word of arr1) {
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
            for(const word of arr1) {
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
        } else if(textOption1 === 'B') {
            const arr1:string[] = textInput.split('');
            for(const word of arr1) {
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
            for(const word of arr1) {
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
        const conversionOrigin:string = textInput;
        let conversionResult:string = "";

        if(textOption1 === 'S' && textSpecific.length < 1) {
            alert('특정 문자를 입력해주세요.');
            return false;
        }

        if(textOption1 === 'S') {
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
        } else if(textOption1 === 'E') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[a-zA-Z]/g, '');
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[a-zA-Z]/g, '');
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[a-zA-Z]/g, '');
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
        } else if(textOption1 === 'B') {
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

    const textUpdate = () => {
        const conversionOrigin:string = textInput;
        const conversionOrder:string = textOrder;
        let conversionResult:string = "";

        if(textOption1 === 'S' && textSpecific.length < 1) {
            alert('특정 문자를 입력해주세요.');
            return false;
        }

        if(textOption1 === 'S') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, conversionOrder);
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, conversionOrder);
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(`${textSpecific}`, conversionOrder);
            }
        } else if(textOption1 === 'N') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[0-9]/g, conversionOrder);
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[0-9]/g, conversionOrder);
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[0-9]/g, conversionOrder);
            }
        } else if(textOption1 === 'E') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[a-zA-Z]/g, conversionOrder);
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[a-zA-Z]/g, conversionOrder);
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[a-zA-Z]/g, conversionOrder);
            }
        } else if(textOption1 === 'L') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[a-z]/g, conversionOrder);
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[a-z]/g, conversionOrder);
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[a-z]/g, conversionOrder);
            }
        } else if(textOption1 === 'U') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[A-Z]/g, conversionOrder);
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[A-Z]/g, conversionOrder);
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[A-Z]/g, conversionOrder);
            }
        } else if(textOption1 === 'K') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/[ㄱ-힣]/g, conversionOrder);
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/[ㄱ-힣]/g, conversionOrder);
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/[ㄱ-힣]/g, conversionOrder);
            }
        } else if(textOption1 === 'B') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/\n/g, conversionOrder);
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/\n/g, conversionOrder);
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/\n/g, conversionOrder);
            }
        } else if(textOption1 === 'G') {
            if(textOption2 === 'F') {
                conversionResult += conversionOrigin.replaceAll(/\s/g, conversionOrder);
            } else if(textOption2 === 'B') {
                conversionResult += conversionOrigin.replaceAll(/\s/g, conversionOrder);
            } else if(textOption2 === 'A') {
                conversionResult += conversionOrigin.replaceAll(/\s/g, conversionOrder);
            }
        }

        setTextResult(conversionResult);
    }

    useEffect(() => {
        setTextOrder('');
        setTextSpecific('');
        if(textMode === 'I') {setTextOption1('O'); setTextOption2('NONE')}
        else if(textMode === 'D') setTextOption1('S');
        else if(textMode === 'U') setTextOption1('S');
    }, [textMode])

    return (
        <Style.ViewStyle>
            <div className="text_tool_container">
                <div className="text_tool_title">
                    <h1>𝙏𝙚𝙭𝙩𝙤𝙤𝙡</h1>
                </div>
                <div className="text_input_area">
                    <div className="text_input_section">
                        <div className="text_section_header">
                            <div className="header_title">
                                Enter Text
                            </div>
                        </div>
                        <textarea style={{resize : "none"}} value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                    </div>
                    <FontAwesomeIcon icon={arrowIcon} className="icon" />
                    <div className="text_input_section text_result_section">
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
                        <textarea style={{resize : "none"}} value={textResult} readOnly={true} />
                    </div>
                </div>
                <div className="text_option_area">
                    <div className="text_option_section">
                        <select onChange={(e) => setTextMode(e.target.value)}>
                            <option value="I">문자 추가</option>
                            <option value="D">문자 제거</option>
                            <option value="U">문자 수정</option>
                        </select>
                        <input type="text" value={textOrder} onChange={(e) => setTextOrder(e.target.value)} 
                        style={textMode !== "D" ? {opacity:1} : {opacity:0}} placeholder={textMode === 'I' ? "word to add" : "word to change"} />
                    </div>
                    <div className="text_option_section">
                        <select value={textOption1} onChange={(e) => setTextOption1(e.target.value)}>
                            {
                                textMode === 'I' ? 
                                    <>
                                        <option value="O">모든 문자</option>
                                        <option value="I">N 문자</option>
                                    </> : <></>
                            }
                            <option value="S">특정 문자</option>
                            <option value="N">모든 숫자</option>
                            <option value="E">모든 영문자</option>
                            <option value="L">모든 영소문자</option>
                            <option value="U">모든 영대문자</option>
                            <option value="K">모든 한글</option>
                            <option value="B">모든 개행</option>
                            <option value="G">모든 공백</option>
                        </select>
                        <input type="number" value={textInterval} onChange={(e) => setTextInterval(e.target.valueAsNumber)} 
                        style={textOption1 === "I" ? {display:"block", opacity:1} : {display:"none", opacity:0}} />
                        <input type="text" value={textSpecific} onChange={(e) => setTextSpecific(e.target.value)} placeholder={"specific word"}
                        style={textOption1 === "S" ? {display:"block", opacity:1} : {display:"none", opacity:0}} />
                        <input type="text" style={textOption1 !== "S" && textOption1 !== "I" ? {display:"block", opacity:0} : {display:"none", opacity:1}} />
                    </div>
                    {
                        textMode === 'I' ?
                            <div className="text_option_section">
                                <select onChange={(e) => setTextOption2(e.target.value)}>
                                    <option value="NONE">추가할 위치</option>
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
                            textMode === "D" ? <button onClick={() => textRemove()}>제거</button> : <button onClick={() => textUpdate()}>수정</button> 
                        }
                    </div>
                </div>
            </div>
        </Style.ViewStyle>
    )
}

export default View;
