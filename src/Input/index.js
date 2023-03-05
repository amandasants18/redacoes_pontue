import * as C from './styles'

  const Input = ({...props}) => {
    return (
        <C.Input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      
        />
        

    )
}

export default Input