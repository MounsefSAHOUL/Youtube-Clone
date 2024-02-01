import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'


import { demoProfilePicture, demoChannelUrl, demoChannelTitle } from './utils/constants.'




const ChannelCard = (channelDetail) => {
    
     //console.log(channelDetail)

    return(

    <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            displa: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '356px', md: '299px' },
            height: '326px',
            margin: 'auto',
        }}
    >

       <Link to={`/channel/${channelDetail.channelDetail?.id?.channelId}` }>
            <CardContent sx={{ display: 'flex', 
                         flexDirection: 'column',
                         justifyContent: 'center',
                         textAlign: 'center',
                         alignItems: 'center',
                         color: '#FFF' }}>

                <CardMedia
                        image={channelDetail?.channelDetail?.snippet?.thumbnails?.default?.url || demoProfilePicture}
                        alt={channelDetail?.channelDetail?.snippet?.title}
                        sx={{ borderRadius : '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
                />

                <Typography variant="h6">
                        {channelDetail?.channelDetail?.snippet?.title || demoChannelTitle}
                        <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '5px' }} />
                </Typography>

                {channelDetail?.channelDetail?.statistics?.subscriberCount && ( 
                    <Typography variant="h6">
                        {/* {parseInt(channelDetail?.channelDetail?.statistics?.subscriberCount).toLocaleString() } */}
                    </Typography>
                )}

            </CardContent>
       </Link>
    </Box>
    )
}

export default ChannelCard