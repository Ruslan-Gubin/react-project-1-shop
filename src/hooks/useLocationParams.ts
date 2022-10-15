import React from "react";
import qs from 'qs';
import { useNavigate } from "react-router-dom";

const useLocationParams = (menu:string, select:string, page:number) => {
  const  [params, setParams] = React.useState('')
  const  [queryString, setQueryString] = React.useState('')
  const isSearch = React.useRef(false)
  const navigate = useNavigate()
  
  React.useEffect(() => {
    if (window.location.search) {
      setParams(qs.parse(window.location.search.substring(1)))
      isSearch.current = true
    } 
  },[])

  React.useEffect(() => {
    window.scrollTo(0, 0)
    if (!isSearch.current) {

    }
    isSearch.current = false
  },[menu, select, page])

  React.useEffect(() => {
    setQueryString(qs.stringify({
      select: select.value,
      menu: menu,
      page,
    }))
    navigate(`?${queryString}`)
  },[menu, select, page,])

  return {queryString}
}

export {useLocationParams}