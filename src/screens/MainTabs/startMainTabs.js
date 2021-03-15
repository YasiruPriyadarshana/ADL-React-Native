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
                    name: 'awesome-places.FindPlace'
                  }
                }
              ],
                options: {
                  bottomTab: {
                    icon: sources[0]
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
                    name: 'awesome-places.SharePlace'
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: sources[1]
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

