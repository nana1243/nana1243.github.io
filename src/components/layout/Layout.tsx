import {Box} from "@mui/material";
import AudioPlayer from "../audioplayer";

const Layout = ({children}) => {
    return (
        <Box sx={{position: 'relative', minHeight: '100vh'}}>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 9999,
                    display: 'flex',
                    justifyContent: 'right',
                    py: 1.5,
                }}
            >
                <AudioPlayer/>
            </Box>

            <Box component="main">
                {children}
            </Box>
        </Box>
    );
}

export default Layout;