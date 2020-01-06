import React from 'react';
import {AppBar, Toolbar,Typography} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import {useSelector} from 'react-redux';

function FooterLayout1(props)
{
    const footerTheme = useSelector(({fuse}) => fuse.settings.footerTheme);

    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar id="fuse-footer" className="relative z-10" color="default">
                <Toolbar className="px-16 py-0 flex items-center">
                    <Typography>
                        <p style={{color: '#bbb'}}>Copyright <span>&copy;</span> Catalyst Brains</p>
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default FooterLayout1;
