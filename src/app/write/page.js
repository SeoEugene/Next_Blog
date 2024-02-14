
export default function write() {
    return (
        <div className='writewrap'>
           <div className='writeheader'>
               <h3>Write</h3>
               <p>기록을 남겨주세요</p>
           </div>
            <form action="/api/post/write" method="POST" className='writeform'>
                <fieldset>
                    <div>
                        <legend className='blind'>글쓰기</legend>
                        <div className='titlebox'>
                            <label htmlFor='title' className='required blind'>제목</label>
                            <input type='text' name='title' id='title' placeholder='제목를 작성해주세요'/>
                            <select name="menu">
                                <option value="daily">Daily</option>
                                <option value="special">Special</option>
                            </select>
                        </div> 
                    </div>
                    <div>
                        <label for="story" className='required blind'>내용</label>
                        <textarea name='story' id='story' placeholder='일상를 작성해주세요' />
                    </div>
                    <button type='submit' className='writebtn'>일상저장</button>
                </fieldset>
            </form>
        </div>
        )
}
