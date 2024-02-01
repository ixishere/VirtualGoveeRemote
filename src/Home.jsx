// THIS PAGE IS WIP, TESTING

import { Avatar, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful';
import { useMemo } from 'react';
import { Grid } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
// RCE CSS
import 'react-chat-elements/dist/main.css'
// MessageBox component
import { MessageBox } from 'react-chat-elements'

const home = () => {
    const [color, setColor] = useState("#e34e4e");

    const [state, setState] = useState({
  
    })
  
    function hexToRgb(hex) {
      // Remove the hash if it exists
      hex = hex.replace(/^#/, '');
  
      // Parse the hex value into individual color components
      const bigint = parseInt(hex, 16);
  
      // Extract the red, green, and blue components using bitwise operations
      const red = (bigint >> 16) & 255;
      const green = (bigint >> 8) & 255;
      const blue = bigint & 255;
  
      // Return an object with the RGB values
      return { red, green, blue };
    }
  
    function invertColor(hex) {
      if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
      }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
      }
      // invert color components
      var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
      // pad each with zeros and return
      return '#' + padZero(r) + padZero(g) + padZero(b);
    }
  
    function padZero(str, len) {
      len = len || 2;
      var zeros = new Array(len).join('0');
      return (zeros + str).slice(-len);
    }
  
    const rgb = useMemo(() => hexToRgb(color), [color]);
    const inverse = useMemo(() => invertColor(color), [color])
  
    useEffect(() => {
      fetch('http://localhost:6969/rgb', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ "red": rgb.red, "green": rgb.green, "blue": rgb.blue })
      })
    }, [color])
  
    useEffect(() => {
      fetch('http://localhost:6969/getrgb', {
        method: 'GET',
        mode: 'cors'
      }).then((body) => {
        console.log(body);
      })
    }, [])

    return (
        <div style={{ overflowX: 'hidden', width: '100%' }}>

            <div style={{ width: '100%', backgroundColor: 'white', color: 'black' }}>
                <Typography style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '30px' }}>
                    RGB Colour Control
                </Typography>
            </div>

            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
                <HexColorPicker color={color} onChange={setColor} style={{ width: '100%', height: 'calc(100vh - 100px)', padding: '10px' }} />

                <div style={{ width: '100%' }}>
                    <hr />
                    <div style={{ width: '100%', backgroundColor: 'white', color: 'black', borderRadius: '5px' }}>
                        <Typography style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '30px' }}>
                            Settings
                        </Typography>
                    </div>

                    <Grid container style={{ marginTop: '20px' }}>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex' }}>
                                <Checkbox
                                    label="RGB Enabled"
                                    sx={{
                                        color: `white`,
                                        '&.Mui-checked': {
                                            color: `white`,
                                        },
                                    }}
                                />
                                <Typography style={{ marginTop: '10px', fontWeight: 'bold' }}>
                                    RGB Enabled
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{ display: 'flex' }}>
                                <Checkbox
                                    label="Spectrum Cycle"
                                    sx={{
                                        color: `white`,
                                        '&.Mui-checked': {
                                            color: `white`,
                                        },
                                    }}
                                />
                                <Typography style={{ marginTop: '10px', fontWeight: 'bold' }}>
                                    Spectrum Cycle
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>


                    <hr />
                    <div style={{ width: '100%', backgroundColor: 'white', color: 'black', borderRadius: '5px' }}>
                        <Typography style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '30px' }}>
                            Chat
                        </Typography>
                    </div>

                    <Paper elevation={3} style={{ marginTop: '10px', padding: '10px', color: 'white', backgroundColor: '#313131', height: '615px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex' }}>
                            <Avatar alt='ahmed patel' />
                            <Typography style={{ marginLeft: '10px' }}>
                                Ahmed Patel <span style={{ opacity: '30%', fontSize: 'small' }}>Today at 10pm</span>
                            </Typography>
                            <p style={{ all: 'unset' }}>test</p>
                        </div>
                    </Paper>

                </div>
            </div>


            <div style={{ width: '100%', marginTop: '10px', backgroundColor: `white`, color: `black`, position: 'fixed', bottom: 0, left: 0, }}>
                <Typography variant="h5" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {color} - {`${rgb.red}, ${rgb.green}, ${rgb.blue}`}
                </Typography>
            </div>
        </div>
    )
}

export default home;