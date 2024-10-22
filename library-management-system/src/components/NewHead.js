// import {
//   Badge,
//   ButtonGroup,
//   FullscreenBar,
//   Button,
//   Text,
// } from '@shopify/polaris';

// import {useState, useCallback, useContext} from 'react';
// import { MyContext } from '../MyContext';
// function FullscreenBarExample() {
// const {createUser, setCreateUser } = useContext(MyContext);
// const {createBook, setCreateBook } = useContext(MyContext);
//   const [isFullscreen, setFullscreen] = useState(true);

//   const handleActionClick = useCallback(() => {
//     setFullscreen(false);
//   }, []);

//   const fullscreenBarMarkup = (
//     <FullscreenBar onAction={handleActionClick}>
//       <div
//         style={{
//           display: 'flex',
//           flexGrow: 1,
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           paddingLeft: '1rem',
//           paddingRight: '1rem',
//         }}
//       >
//         <Badge tone='success'>Library Management System</Badge>
//         <div  style={{marginLeft: '1rem', flexGrow: 1}}>
//           <Text variant="headingLg" as="p">
//             Admin Dashboard
//           </Text>
//         </div>
//         <ButtonGroup>
//           <Button onClick={() => {setCreateBook((val)=>!val);setCreateUser(false)}}>Add Book</Button>
//           <Button variant="primary" onClick={() => {setCreateUser((val)=>!val);setCreateBook(false)}}>
//           Create User
//           </Button>
//         </ButtonGroup>
//       </div>
//     </FullscreenBar>
//   );

//   return (
//     <div style={{height: '70px', width: '100%'}}>
//       {isFullscreen && fullscreenBarMarkup}
//       <div style={{padding: '1rem'}}>
//         {!isFullscreen && (
//           <Button onClick={() => setFullscreen(true)}>Go Fullscreen</Button>
//         )}
//         <Text variant="headingLg" as="p">

//         </Text>
//       </div>
//     </div>
//   );
// }

// export default FullscreenBarExample
