import {Box} from "@mui/material";
import AudioPlayer from "../audioplayer";

const Layout = ({children}) => {
    return (
        <Box sx={{position: 'relative', minHeight: '100vh'}}>
            <Box
                sx={{
                    position: 'fixed',
                    top: '12px',
                    right: '20px',
                    zIndex: 9999,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
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