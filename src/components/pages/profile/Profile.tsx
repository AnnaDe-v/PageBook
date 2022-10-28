import { Avatar, Box } from '@mui/material'
import React, { FC } from 'react'
import { useAuth } from '../../providers/useAuth'
import Card from '../../ui/Card'


const Profile: FC = () => {
    const { user } = useAuth()


    return (
        <>
            <Card>
                <Avatar src={user?.avatar} style={{
                    width: 100,

                    }}/>
                <h1>{user?.name}</h1>
                


                </Card>
                <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
            
        </>

    )
}

export default Profile
