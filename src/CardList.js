export const CardList = ({post}) => {
    const {userId, id, title, body} = post;

    return (
        <div class="center">
            <div className='grow bg-light-blue br1 pa2 ma2 dib bw1 fl w-10 pa2'>
                <img alt='robots' src={`https://robohash.org/${id}?size=100x100`}/>
                <h3 >{title.substring(0,10)}</h3>
                <hr className="mw3 bb bw1 b--black-10"></hr>
                <p>id: {id}  </p>
                <p>userId: {userId}</p>
                <h3>Post:</h3>
                <p className="lh-copy measure center f6 black-70">
                    {body.substring(0,90)}
                </p>
            </div>
        </div>
    );
}