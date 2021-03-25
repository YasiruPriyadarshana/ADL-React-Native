import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const startTabs = () => {
  Promise.all([
    Icon.getImageSource("map-outline", 30),
    Icon.getImageSource("share-outline", 30),
    Icon.getImageSource("menu-outline", 30),
  ]).then(sources => {

    Navigation.setRoot({
      root: {
        sideMenu: {
          center: {
            bottomTabs: {
              id: 'BOTTOM_TABS_LAYOUT',
              children: [
                {
                  stack: {
                    id: 'FindPlace_TAB',
                    children: [
                      {
                        component: {
                          id: 'FindPlace_SCREEN',
                          name: 'awesome-places.FindPlaceScreen'
                        }
                      }
                    ],
                    options: {
                      bottomTab: {
                        icon: sources[0],
                        text: "FindPlace",
                        iconColor: "red",
                        selectedIconColor: "red",
                        selectedTextColor: "red"
                      },
                      topBar: {
                        title: { text: "FindPlace" },
                        
                      }
                    }
                  }
                },
                {
                  stack: {
                    id: 'SharePlace_TAB',
                    children: [
                      {
                        component: {
                          id: 'SharePlace_SCREEN',
                          name: 'awesome-places.SharePlaceScreen'
                        }
                      }
                    ],
                    options: {
                      bottomTab: {
                        icon: sources[1],
                        text: "SharePlace",
                        iconColor: "red",
                        selectedIconColor: "red",
                        selectedTextColor: "red"
                      },
                      topBar: {
                        title: { text: "SharePlace" },
                        leftButtons: {
                          id: 'sideMenu',
                          icon: sources[2],
                        },
                      }
                    }
                  }
                }
              ]
            }
          },
          left: {
            component: {
              id: "leftSideDrawer",
              name: "awesome-places.SideDrawer"
            }
          }
        }
      }


    });


  });

}

export default startTabs;

