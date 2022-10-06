import { React, useState, useRef, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Scrollspy from 'react-scrollspy'
import Styles from '../Common/CommonStyles.css'
import { BsSearch } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />

function Hierarchy(props) {

    const [searchValue, setSearchValue] = useState({
        title: "",
    });

    const inputRef = useRef();

    const dishGroup = useSelector( state => state.dishGroup)

    const searchValueChanged =(e) => {
        setSearchValue({
            ...searchValue,
            [e.target.name]: e.target.value,
        })
    }
    
    const filteredDishes = dishGroup.filter(
        dishGroup => {
          return (
            dishGroup
            .Gtitle
            .toLowerCase()
            .includes(searchValue.title.toLowerCase())
          );
        }
      );

    const handleSubmit = e => {
        e.preventDefault()
        if (searchValue.title.trim()) {
          const dishGroupLi = document.getElementsByClassName('nav-item')
          var i
          for (i = 0; i < dishGroupLi.length; i++ ){
            if (dishGroup[dishGroupLi[i].id].Gname.lastIndexOf(searchValue.title) === -1){
                dishGroupLi[i].style = 'display: none'
            }
          }
          
        setSearchValue({
            title: "",
            })
        } else {
            alert("Please write item")
        }
      }
    
  return (
    <>
    <div style = {{position: 'sticky', paddingTop: 150, top: 0, paddingLeft: 50, paddingRight: 50}}>
      <Stack direction="horizontal" gap={3}> 
        <Button onClick={handleSubmit} > <BsSearch /> </Button>
        <Form.Control 
          className="me-auto" 
          placeholder="Search here..." 
          name = "title"
          onChange={searchValueChanged}
          value = {searchValue.title}
        />
      </Stack>
      <br />
      <Scrollspy 
        items = { [dishGroup[0].Gname, dishGroup[1].Gname, dishGroup[2].Gname, dishGroup[3].Gname, dishGroup[4].Gname, dishGroup[5].Gname] }    ///     I have a question.
        currentClassName = "is-current" 
        offset={-100} 
        style = {{ textAlign: 'right', listStyleType: 'none'}}>
        {
          dishGroup?.map((item, index)=>{
            return(
              <li key = {'dishGroup'+index} className = "nav-item" style = {{ borderRadius: 5, fontSize: 25}} id = {item.Gid} ref = {inputRef[index]}>
                <a className = "nav-link" href = {"#"+item.Gname}> {item.Gtitle} </a>
              </li>
            )
          })
        }
      </Scrollspy>
    </div>
    </>
  );
}

export default Hierarchy;