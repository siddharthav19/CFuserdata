const getHandle = (handle,num)=>
{
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange',()=>{
        if(req.readyState === 4 && req.status === 200)
        {
            const data = JSON.parse(req.responseText);
            console.log(data.result[data.result.length - 1]);

            document.querySelector('.output').style.display = 'block';

            document.querySelector('.ans1').textContent =`Old Rating : ${ data.result[data.result.length - 1].oldRating} `;
            document.querySelector('.ans2').textContent = `new Rating : ${ data.result[data.result.length - 1].newRating}`
            document.querySelector('.ans3').textContent = ` Rank : ${ data.result[data.result.length - 1].rank}`;
            document.querySelector('.ans4').textContent = `User : ${data.result[data.result.length - 1].handle}`;
            document.querySelector('.output').classList.add('center');

        }
        else if ( req.readyState === 4)
        {
                document.querySelector('.output').style.display = 'none';


        }
        document.querySelector('form').reset();


    });

    req.open('GET',`https://codeforces.com/api/user.rating?handle=${handle}`);
    req.send();


};

document.querySelector('form').addEventListener('submit',(e)=>{

    e.preventDefault();
    const handleName = document.querySelector('form').handlename.value;
    console.log(handleName);
    let numbr = 1;
    getHandle(handleName,numbr);


});