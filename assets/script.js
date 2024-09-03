 // SCRIPT SIDEBAR 
 // Mobile Sidebar Toggle
 const sidebar = document.getElementById('sidebar');
 const toggleButton = document.getElementById('toggleButton');

 toggleButton.addEventListener('click', () => {
     sidebar.classList.toggle('-translate-x-full');
 });

 // Submenu Toggle with Icon Rotation
 document.addEventListener('click', function(event) {
     if (event.target.dataset.toggle === 'submenu') {
         const submenuId = event.target.dataset.target;
         const submenu = document.getElementById(submenuId);
         submenu.classList.toggle('hidden');
         
         // Rotate Icon
         const icon = event.target.querySelector('.fa-chevron-down');
         icon.classList.toggle('rotate-180');
     }
 });

 // Search Functionality
 document.getElementById('searchInput').addEventListener('input', function() {
     const filter = this.value.toLowerCase();
     const menuItems = document.querySelectorAll('.menu-item');
     const submenuItems = document.querySelectorAll('.submenu-item');

     // Filter menu items
     menuItems.forEach(item => {
         const text = item.textContent.toLowerCase();
         if (text.includes(filter)) {
             item.style.display = '';
         } else {
             item.style.display = 'none';
         }
     });

     // Filter submenu items
     submenuItems.forEach(item => {
         const text = item.textContent.toLowerCase();
         const parentMenuItem = item.closest('.menu-item');
         if (text.includes(filter)) {
             item.style.display = '';
             parentMenuItem.style.display = ''; // Show parent if submenu item is visible
         } else {
             item.style.display = 'none';
         }
     });

     // Hide parent menu item if no submenu items are visible
     menuItems.forEach(item => {
         const submenus = item.querySelectorAll('.submenu-item');
         if (submenus.length > 0) {
             const visibleSubmenuItems = Array.from(submenus).some(submenu => submenu.style.display !== 'none');
             if (!visibleSubmenuItems) {
                 item.style.display = 'none';
             }
         }
     });
 });
 // SCRIPT END SIDEBAR 
