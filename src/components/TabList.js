import React, { useState } from "react";
import styled from "styled-components";

const TabListWrapper = styled.div`

    .tab-wrapper {
        position: relative;
        height: 53px;
        display: flex;
        justify-content: space-around;
    }

    .tab-wrapper .detail-tab {
        position: relative;
        width:100%;
        font-weight: 700;
        display: flex;
        justify-content: center;
        box-sizing:border-box;
    }

    .tab-wrapper :hover {
        background: rgb(230,230,230);
        transition-duration:0.2s;
    }

    .tab-wrapper .detail-tab :hover {
        background: none;
    }

    .tab-wrapper .tab {
        display: flex;
        justify-content: center;
        position: relative;
        padding-top:16px;
        padding-bottom:16px;
    }

    .tab-wrapper .detail-tab .tab .bottom-line {
        width: 100%;
        position: absolute;
        bottom: 0px;

        min-width: 56px;
        height: 4px;
        background: rgb(29, 155, 240);
    }

`;

const TabList = (props) => {
    const [tabId, setTabId] = useState(0);

    const tabChange = (index) => {
        setTabId(index);
    }

    return (
      <TabListWrapper>
        <nav className="tab-wrapper">
            {props.tabs.map((item, index) => (
            <div className = "detail-tab" onClick={() => {tabChange(index)}}>
                <div key={index} className={index === tabId? "tab":"tab twitter-grey" }>
                    <span className="tab-name">{item}</span>
                    {index === tabId && 
                        (<div className = "bottom-line"></div>)
                    }
                </div>
            </div>
            ))}
        </nav>
      </TabListWrapper>
    );
  };
  
  export default TabList;