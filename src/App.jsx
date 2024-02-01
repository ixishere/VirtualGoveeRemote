// Importing necessary components from Material-UI library
import { Grid, Typography } from "@mui/material"

// Main functional component representing the application
function App() {
  
  // Function to convert hexadecimal color code to RGB format
  function hexToRgb(hex) {
    // Remove the hash if it's present
    hex = hex.replace(/^#/, '');

    // Parse the hex value to integers for red, green, and blue components
    const bigint = parseInt(hex, 16);
    const red = (bigint >> 16) & 255;
    const green = (bigint >> 8) & 255;
    const blue = bigint & 255;

    // Return an object with red, green, and blue properties
    return { red, green, blue };
  }

  // Function to handle button click events and send POST requests
  const handleButtonClick = (code, hex) => {
    try {
      // Send POST request with code to a specified endpoint
      fetch('http://192.168.0.82/rgb', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ code: code })
      })
      
      // If hex value is provided, send additional POST request with RGB values
      hex && fetch('http://localhost:6969/rgb', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(hexToRgb(hex))
      })

      // Log success message to the console
      console.log('POST requests sent successfully!');
    } catch (error) {
      // Log any errors that occur during the request
      console.error('Error sending POST request:', error);
    }
  }

  // Component for color buttons
  const GridColorButton = ({ code, hex }) => (
    <Grid item xs={3}>
      <button style={{ width: '100%', height: '50px', backgroundColor: `#${hex}`, border: '3px solid black' }} onClick={() => handleButtonClick(code, hex)} />
    </Grid>
  );

  // Component for control buttons
  const GridControlButton = ({ code, text }) => (
    <Grid item xs={3}>
      <button style={{ width: '100%', height: '50px', backgroundColor: '#313131', color: 'white', border: '3px solid black' }} onClick={() => handleButtonClick(code)}>
        {text}
      </button>
    </Grid>
  );

  // Main render block
  return (
    <>
      <div style={{ overflowX: 'hidden', width: '100%' }}>
        <div style={{ width: '100%', backgroundColor: 'rebeccapurple', color: 'white' }}>
          <Typography style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '30px' }}>
            Virtual RGB Remote
          </Typography>
        </div>

        <div style={{ margin: '25px' }}>
          {/* Section for color buttons with specified codes and hex values */}
          <Typography variant="h6" style={{ textAlign: 'center', margin: '20px' }}>
            Colour Buttons
          </Typography>
          <Grid container spacing={5}>
            <GridColorButton code="FF1AE5" hex="ff0000" />
            <GridColorButton code="FF9A65" hex="00ff00" />
            <GridColorButton code="FFA25D" hex="0000ff" />
            <GridColorButton code="FF22DD" hex="ffffff" />

            <GridColorButton code="FF2AD5" hex="e07c43" />
            <GridColorButton code="FFAA55" hex="59a75b" />
            <GridColorButton code="FF926D" hex="4e78b1" />
            <GridColorButton code="FF12ED" hex="e4bfcd" />

            <GridColorButton code="FF0AF5" hex="e6af64" />
            <GridColorButton code="FF8A75" hex="3ea477" />
            <GridColorButton code="FFB24D" hex="4d639a" />
            <GridColorButton code="FF32CD" hex="c76f9d" />

            <GridColorButton code="FF38C7" hex="ebc73a" />
            <GridColorButton code="FFB847" hex="3fbac1" />
            <GridColorButton code="FF7887" hex="8571a6" />
            <GridColorButton code="FFF807" hex="7eccd9" />

            <GridColorButton code="FF18E7" hex="cad770" />
            <GridColorButton code="FF9867" hex="48b3db" />
            <GridColorButton code="FF58A7" hex="b86599" />
            <GridColorButton code="FFD827" hex="4eb5e0" />
          </Grid>

          {/* Section for control buttons with specified codes and text content */}
          <Typography variant="h6" style={{ textAlign: 'center', margin: '20px' }}>
            Control Buttons
          </Typography>
          <Grid container spacing={5}>
            <GridControlButton code="FF28D7"
              text={(<>
                <Typography variant="h5">Jump3</Typography>
              </>)}
            />
            <GridControlButton code="FFA857"
              text={(<>
                <Typography variant="h5">Jump7</Typography>
              </>)}
            />
            <GridControlButton code="FF6897"
              text={(<>
                <Typography variant="h5">Fade3</Typography>
              </>)}
            />
            <GridControlButton code="FFE817"
              text={(<>
                <Typography variant="h5">Fade7</Typography>
              </>)}
            />
            <GridControlButton code="FF3AC5"
              text={(<>
                <Typography variant="h5">Brightness Up</Typography>
              </>)}
            />
            <GridControlButton code="FFBA45"
              text={(<>
                <Typography variant="h5">Brightness Down</Typography>
              </>)}
            />
            <GridControlButton code="FF827D"
              text={(<>
                <Typography variant="h5">Play/Pause</Typography>
              </>)}
            />
            <GridControlButton code="FF02FD"
              text={(<>
                <Typography variant="h5">Power Off On</Typography>
              </>)}
            />
            <GridControlButton code="FF08F7"
              text={(<>
                <Typography variant="h5">Red Up</Typography>
              </>)}
            />
            <GridControlButton code="FF8877"
              text={(<>
                <Typography variant="h5">Green Up</Typography>
              </>)}
            />
            <GridControlButton code="FF48B7"
              text={(<>
                <Typography variant="h5">Blue Up</Typography>
              </>)}
            />
            <GridControlButton code="FFC837"
              text={(<>
                <Typography variant="h5">Quick</Typography>
              </>)}
            />
            <GridControlButton code="FF30CF"
              text={(<>
                <Typography variant="h5">Red Down</Typography>
              </>)}
            />
            <GridControlButton code="FFB04F"
              text={(<>
                <Typography variant="h5">Green Down</Typography>
              </>)}
            />
            <GridControlButton code="FF708F"
              text={(<>
                <Typography variant="h5">Blue Down</Typography>
              </>)}
            />
            <GridControlButton code="FFF00F"
              text={(<>
                <Typography variant="h5">Slow</Typography>
              </>)}
            />
            <GridControlButton code="FF10EF"
              text={(<>
                <Typography variant="h5">Diy 1</Typography>
              </>)}
            />
            <GridControlButton code="FF906F"
              text={(<>
                <Typography variant="h5">Diy 2</Typography>
              </>)}
            />
            <GridControlButton code="FF50AF"
              text={(<>
                <Typography variant="h5">Diy 3</Typography>
              </>)}
            />
            <GridControlButton code="FFD02F"
              text={(<>
                <Typography variant="h5">Auto</Typography>
              </>)}
            />
            <GridControlButton code="FF20DF"
              text={(<>
                <Typography variant="h5">Diy 4</Typography>
              </>)}
            />
            <GridControlButton code="FFA05F"
              text={(<>
                <Typography variant="h5">Diy 5</Typography>
              </>)}
            />
            <GridControlButton code="FF609F"
              text={(<>
                <Typography variant="h5">Diy 6</Typography>
              </>)}
            />
            <GridControlButton code="FFE01F"
              text={(<>
                <Typography variant="h5">Flash</Typography>
              </>)}
            />
          </Grid>
        </div>
      </div>
    </>
  )
}

// Export the App component as the default export
export default App