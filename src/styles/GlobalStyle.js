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
		font-size: 1rem;
		line-height: 1.7;
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
    
    .fill-color {
        fill: currentcolor;
    }

	.pointer {
		cursor: pointer;
	}

	button, svg {
	  cursor: pointer;
	}

	.bold {
		font-weight: 500;
	}

	*:focus {
	  outline: none;
	}

`;

export default GlobalStyle;
