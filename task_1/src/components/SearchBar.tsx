

import React, { FC } from 'react'


const SearchIcon = (props: {style: React.CSSProperties}) => 
    <svg style={props.style} 
        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
        fill-rule="evenodd" clip-rule="evenodd" fill="#432EAB"
            d="M15.8033 15.8033C12.8744 18.7322 8.12563 18.7322 5.1967 15.8033C2.26777 12.8744 
            2.26777 8.12563 5.1967 5.1967C8.12563 2.26777 12.8744 2.26777 15.8033 5.1967C18.7322 
            8.12563 18.7322 12.8744 15.8033 15.8033ZM16.1457 16.8545C12.8078 19.8256 7.69007 19.7109 
            4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959C7.80905 1.17014 13.191 1.17014 
            16.5104 4.48959C19.7115 7.69065 19.8256 12.8097 16.8529 16.1475L21.4605 20.7551C21.6558 20.9504
            21.6558 21.267 21.4605 21.4622C21.2653 21.6575 20.9487 21.6575 20.7534 21.4622L16.1457 16.8545Z" 
    />
</svg>


type PropsSearchBar = {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}
export const SearchBar: FC<PropsSearchBar> = ({onChange}) => {
    const style: Record<string, React.CSSProperties> = {
        
        container: {
            position: 'relative',
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '1120px',
            height: '48px',
        },
        icon: {
            position: 'absolute',
            right: '24px',
            top: '12px'
        },
        input: {
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
            borderRadius: '24px',
            border: '1px solid',
            color: 'black',
            textAlign: 'center'
        }
    }

  return (
        <div style={style.container}>
            <input style={style.input} type="text" onChange={onChange}/>
            <SearchIcon style={style.icon}/>
        </div>
    
  )
}
