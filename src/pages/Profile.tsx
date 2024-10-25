import { ProfileBioCard } from '../ui/profile/ProfileBioCard'
import { ProfileHeader } from '../ui/profile/ProfileHeader'
import React from 'react'
import { SubscriptionCard } from '../ui/profile/SubscriptionCadr'

const Profile = () => {
    return (
        <div>
            <ProfileHeader></ProfileHeader>
            <div className='flex mt-4'>
                <ProfileBioCard></ProfileBioCard>
                <SubscriptionCard></SubscriptionCard>
            </div>
        </div>
        
    )
}

export default Profile