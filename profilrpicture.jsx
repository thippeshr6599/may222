import React, {useRef, useState, useEffect} from 'react'
import "./profilepicture.css"

export default function profilrpicture() {
    const[newProduct, setNewProduct] = useState(true)
    const [imgURL,setimgURL] = useState("")

    const imgRef = useRef(0);
    const handleclick=(e)=>{
        const file = e.target.files[0]
        if (file) {
            const preview = URL.createObjectURL(file);
            setimgURL(preview);
            setNewProduct(false);
        }
    }
    const [count, setcount] = useState(0);
    const inputRef = useRef();
    const focusinput=()=>{
        inputRef.current.focus()
    }
    console.log(" Instagram Post ");
    

  return (
    <div>
         <div className='head1'>
            <h1>TASK-7    Profile Picture Area </h1>
         </div>
         <br />
        <div>
        <nav>
           <div className='container'>
                <div className='head2'>
                  <h2 className='plus'> + </h2>
                  <h2>INSTAGRAM /// </h2>
                  <h2 className='heart'> &hearts; </h2>
                </div>
                 <div className='circle1'>
                       <div className='circle'>
                              <nav>
                                  <input type="file"
                                     ref={imgRef} 
                                     accept='image/*' 
                                      hidden 
                                      onChange={handleclick}/>
                                   {newProduct? (
                                     <div className='container5' 
                                      onClick={()=>imgRef.current.click()}>
                                        
                                        </div>
                                      ) : (
                                      <img className='org-img5' 
                                       src={imgURL} 
                                        onClick={()=> imgRef.current.click()}
                                        alt='profile'/>
                                     )}
                             </nav>
                       </div>
                       <div className='circle'>
                                  <nav>
                                  <input type="file"
                                     ref={imgRef} 
                                     accept='image/*' 
                                      hidden 
                                      onChange={handleclick}/>
                                   {newProduct? (
                                     <div className='container5' 
                                      onClick={()=>imgRef.current.click()}>
                                        
                                        </div>
                                      ) : (
                                      <img className='org-img5' 
                                       src={imgURL} 
                                        onClick={()=> imgRef.current.click()}
                                        alt='profile'/>
                                     )}
                             </nav>
                       </div>
                       <div className='circle'>
                                   <nav>
                                  <input type="file"
                                     ref={imgRef} 
                                     accept='image/*' 
                                      hidden 
                                      onChange={handleclick}/>
                                   {newProduct? (
                                     <div className='container5' 
                                      onClick={()=>imgRef.current.click()}>
                                        
                                        </div>
                                      ) : (
                                      <img className='org-img5' 
                                       src={imgURL} 
                                        onClick={()=> imgRef.current.click()}
                                        alt='profile'/>
                                     )}
                             </nav>
                       </div>
                       <div className='circle'>
                                  <nav>
                                  <input type="file"
                                     ref={imgRef} 
                                     accept='image/*' 
                                      hidden 
                                      onChange={handleclick}/>
                                   {newProduct? (
                                     <div className='container5' 
                                      onClick={()=>imgRef.current.click()}>
                                        
                                        </div>
                                      ) : (
                                      <img className='org-img5' 
                                       src={imgURL} 
                                        onClick={()=> imgRef.current.click()}
                                        alt='profile'/>
                                     )}
                             </nav>
                       </div>
                       <div className='circle'>
                                <nav>
                                  <input type="file"
                                     ref={imgRef} 
                                     accept='image/*' 
                                      hidden 
                                      onChange={handleclick}/>
                                   {newProduct? (
                                     <div className='container5' 
                                      onClick={()=>imgRef.current.click()}>
                                        
                                        </div>
                                      ) : (
                                      <img className='org-img5' 
                                       src={imgURL} 
                                        onClick={()=> imgRef.current.click()}
                                        alt='profile'/>
                                     )}
                             </nav>
                       </div>

                </div>
                <br />
                <div className='head2'>
                    <div className='circles'>
                           <nav>
                                  <input type="file"
                                     ref={imgRef} 
                                     accept='image/*' 
                                      hidden 
                                      onChange={handleclick}/>
                                   {newProduct? (
                                     <div className='container5' 
                                      onClick={()=>imgRef.current.click()}>
                                        
                                        </div>
                                      ) : (
                                      <img className='org-img5' 
                                       src={imgURL} 
                                        onClick={()=> imgRef.current.click()}
                                        alt='profile'/>
                                     )}
                             </nav>
                    </div>
                    <h3> iamraam0099</h3>
                    <h4> !!!! </h4>
                </div>
                 <nav>
                    <input type="file"
                           ref={imgRef} 
                           accept='image/*' 
                           hidden 
                           onChange={handleclick}/>
                           {newProduct? (
                             <div className='container1' 
                             onClick={()=>imgRef.current.click()}>
                              update image .....
                            </div>
                            ) : (
                         <img className='org-img' 
                           src={imgURL} 
                           onClick={()=> imgRef.current.click()}
                            alt='profile'/>
                            )}
                 </nav>
                <div className='likecom'>
                       <div className='like1'>
                           <h2> <button onClick={()=>setcount(count+1)}>Like </button> : {count} </h2>
                       </div>
                      <div className='end1'>
                          <nav>
                            <button onClick={focusinput}>SUBMIT </button>  :: 
                            <input type="text" ref={inputRef} placeholder='Comment section'/>
                         </nav>
                        </div>
                  </div>
                 
           </div>





        </nav>
        </div>


    </div>
  )
}
