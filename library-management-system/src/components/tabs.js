// import {LegacyCard, Tabs} from '@shopify/polaris';
// import {useState, useCallback} from 'react';
// import data from '../data/books.json'
// import users from '../data/users.json'
// import {
//     IndexTable,
    
//     useIndexResourceState,
//     Text,
//     Badge,
//   } from '@shopify/polaris';
// function TabsFittedExample() {
//   const [selected, setSelected] = useState(0);
//   const [tabBooks,setTabBooks]=useState(true)
// //   const [tabUsers,setTabUsers]=useState(false)

//   const handleTabChange = useCallback(
//     (selectedTabIndex) => {
//       setSelected(selectedTabIndex);
//       setTabBooks((val)=>!val) // Update selected tab index
//     //   setTabUsers((val)=>!val) // Update selected tab index
//     },
//     []
//   );
//   const tabs = [
//     {
//       id: 'all-customers-fitted-2',
//       content: 'All Books',
//       accessibilityLabel: 'All customers',
//       panelID: 'all-customers-fitted-content-2',
//       available:"No Books Available"
      
//     },
//     {
//       id: 'accepts-marketing-fitted-2',
//       content: 'All Users',
//       panelID: 'accepts-marketing-fitted-Ccontent-2',
//       available:"No Users Available"
//     },
//   ];

 
//   return (
//     <LegacyCard>

//       <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>

//         <LegacyCard.Section title={tabs[selected].content}>

     
    
//       { tabBooks ? <div>
//       {data.map((item, index) => (
//         <div className='flex justify-around p-7 text-3xl items-center' >
//           <h3>{item.book_name}</h3>
//           <p>Author: {item.author}</p>
//           <p>Price: ${item.price.toFixed(2)}</p>
//         </div>
//       ))}
//     </div>:<div>
//       {users.map((item, index) => (
//         <div className='flex justify-around p-7 text-3xl items-center' >
            
//           <h3>{item.id}</h3>
//           <p>Name: {item.full_name}</p>
//           <p>email: {item.email}</p>
//           <p>class: {item.class}</p>
//         </div>
//       ))}
//     </div>}
       

//         </LegacyCard.Section>
//       </Tabs>
//     </LegacyCard>
//   );
// }
// export default TabsFittedExample