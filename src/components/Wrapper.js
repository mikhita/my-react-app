const wrapper = (Component)=>(...props)=>(
    <div>
        <div >Higher order function</div>
        <Component {...props} />
    </div>

)

export default wrapper