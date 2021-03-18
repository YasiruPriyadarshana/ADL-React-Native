import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const startTabs = (props) => {
  Promise.all([
    Icon.getImageSource("map-outline", 30),
    Icon.getImageSource("share-outline", 30),
  ]).then(sources => {

    Navigation.push(props, {
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
                  color: "red",
                  textColor: "red"
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
                  color: "red",
                  textColor: "red"
                }
              }
            }
          }
        ]
      }
    });
  });

}

export default startTabs;

