import React from "react";
import {Button, TextField} from "@material-ui/core";
import {ActionType, AppStateType, FriendsPageType, FriendType} from "../../Redux/store";

type PropsType={
    friends:FriendType[]
    dispatch:(action:ActionType)=>void
}
export function Friends(props:PropsType){
  let friendsList=props.friends.map((f)=><li key={f.id}>{f.name}</li>)
    return(
       <div>
           <TextField
               variant={"standard"}
               label={"Find new friends"}

           />
           <Button
               variant={"outlined"}
               color={"primary"}>Find
           </Button>
           <ul>
               {friendsList}
           </ul>
       </div>
    )
}