document.querySelectorAll('.item').forEach(item => { 

    item.addEventListener('mouseover', () => { 

        const descriptionBox = document.getElementById('description-box'); 

        descriptionBox.textContent = item.getAttribute('data-description'); 

        descriptionBox.style.display = 'block'; 

    }); 

  

    item.addEventListener('mouseout', () => { 

        const descriptionBox = document.getElementById('description-box'); 

        descriptionBox.style.display = 'none'; 

    }); 

  

    item.addEventListener('mousedown', () => { 

        alert(item.getAttribute('data-description')); 

    }); 

}); 

 