const wrapper = (Component)=>(...props)=>(
    <div>
        <div style={{border:"2px solid red"}}>Higher order function</div>
        <Component {...props} />
    </div>

)

export default wrapper