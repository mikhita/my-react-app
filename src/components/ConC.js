import React from 'react'
import {UserContext, ChannelContext} from "../App"

function ConC() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user=>{
                    return (
                        <ChannelContext.Consumer>
                            {chanel => {
                                return <div>hi {user} hi {chanel}</div>
                            }}
                        </ChannelContext.Consumer>
                    ) 
             }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ConC