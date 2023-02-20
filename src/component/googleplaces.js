import { useRef, useEffect ,useState} from "react";
import GoogleMapReact from 'google-map-react';
import { useDispatch,useSelector ,connect} from 'react-redux'
import {addplace,getplaces} from '../action/places';

import { useOutsideClick } from '@chakra-ui/react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space , Divider, List} from 'antd';


import places from "../reducer/places";
import "../App.css"
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const MarkerCom = ({ text }) => <div style={{padding:50,color:"red"}}><i style={{fontSize: 70}} className="fa fa-map-marker" aria-hidden="true"></i>
</div>;

const AutoComplete = ({addplace,place}) => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = null;
  const [latitude, setLatitude] = useState(35.9202);
  const [longititute, setLongititute] = useState(74.3080);


  const [zoom, setZoom] = useState(11);
  const [showlist, setShowlist] = useState(false);
  const listref = useRef()


  // const ref = useOutsideClick(handleClickOutside);

  useOutsideClick({
    ref: listref,
    handler: () => setShowlist(false),
  })

  const isLoggedIn = useSelector((state) =>{});
    // console.log("places from store",place.places)

 useEffect(() => {




  if(window.google != undefined){
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
      
     );
     autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
         
       //   place  
    
   
   
       if(place){
        //  console.log("latititude",place)
        setLatitude(place.geometry.location.lat()) ;  
        setLongititute(place.geometry.location.lng()) ; 
        setZoom(12); 
     
       addplace(place.name);
       setShowlist(true)
     
        }
   
     
     });
  }

  
 }, [latitude,longititute]);

 const defaultProps = {
    center: {
      lat: latitude,
      lng: longititute
    },
    zoom: zoom
  };
 return (
    <>

    {latitude  ? 
  <div>



    
        <div className="search">

        <input ref={inputRef} />
              { showlist &&
           <List className="list-name" ref={listref}
              size="large"
              header={<div style={{fontWeight : 600}}>Searched Locations</div>}
              footer={<div></div>}
              bordered
              dataSource={place.places}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />

              }

        </div>
          
    


   <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
      yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{ key: "" }}
        // defaultCenter={defaultProps.center}
        center={defaultProps.center}

        defaultZoom={defaultProps.zoom}
      >
        <MarkerCom
          lat={latitude}
          lng={longititute}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>

        
  </div>

   :  ""}

  </>
 );
};

const mapStateToProps = (state) => ({

  place: state.place,

 
});

export default connect(mapStateToProps,{addplace})(
  AutoComplete
);
