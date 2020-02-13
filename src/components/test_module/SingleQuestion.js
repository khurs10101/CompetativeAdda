import React from 'react'

const SingleQuestion= (props)=>(
    <div>
    <div>
        This is the question?
    </div>
    <form>
        <div className="radio">
            <label>
                <input type="radio" value="option1" checked={true} />
                Option 1
            </label>
            </div>
            <div className="radio">
            <label>
                <input type="radio" value="option2" />
                Option 2
            </label>
            </div>
            <div className="radio">
            <label>
                <input type="radio" value="option3" />
                Option 3
            </label>
            <label>
                <input type="radio" value="option4" />
                Option 4
            </label>
        </div>
    </form>
    </div>

)

export default SingleQuestion