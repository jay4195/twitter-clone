import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 16px;
		box-sizing: border-box;
	}

    .app {
        display: flex;
        flex-direction:row;
    }

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}

	body {
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
		overflow-x: hidden;
        display: flex;
	}


	h2 {
		font-size: 20px;
		font-weight: 700;
	}

	h3, h4, h5, h6 {
		font-weight: normal;
	}

	a {
		text-decoration: none;
		cursor: pointer;
		color: inherit;
	}

    .twitter-blue {
        color: rgb(29, 155, 240);
    }

	.twitter-grey {
        color: rgb(83, 100, 113);
    }
    
    .fill-color {
        fill: currentcolor;
    }

	.pointer {
		cursor: pointer;
	}

	button, svg {
		cursor: pointer;
	}

	.bold-font {
		font-weight: 800;
	}

	.line-space {
		margin-bottom: 12px;
	}

	.default-side {
		margin-left: 16px;
		margin-right: 16px;
	}

	.button-border {
		border-color: rgb(207, 217, 222);
		border-width: 1px;
		border-style: solid;
	}

	.round-border {
		border-radius:9999px;
		transition-duration:0.2s;
	}

	*:focus {
	  outline: none;
	}

`;

export default GlobalStyle;
