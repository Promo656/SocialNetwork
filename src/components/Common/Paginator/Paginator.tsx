import React from "react";
import s from "./Paginator.module.scss";
import {Pagination} from "antd";

type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
}

export function Paginator(props: PropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div>
      {/*      <div>
                <Pagination total={85}/>
            </div>*/}


            {pages.map((p) => {
                return <span onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? s.number : ""}> {p} </span>
            })}
        </div>
    )
}