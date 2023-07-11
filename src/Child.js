

const Child = (props) => {
    console.log(props)
    return (
        <div>
            Child.js
            {props.item}
        </div>
    )
}

export default Child