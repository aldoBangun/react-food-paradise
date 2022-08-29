import { Tabs, Tab } from 'react-bootstrap'
import TabMyRecipe from './TabMyRecipe'
import TabSavedRecipe from './TabSavedRecipe'
import TabLikedRecipe from './TabLikedRecipe'

const TabsRecipe = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="my-recipe"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="my-recipe" title="My Recipe">
          <TabMyRecipe />
        </Tab>
        <Tab eventKey="saved-recipe" title="Saved Recipe">
          <TabSavedRecipe />
        </Tab>
        <Tab eventKey="liked-recipe" title="Liked Recipe">
          <TabLikedRecipe />
        </Tab>
      </Tabs>
    </>
  )
}

export default TabsRecipe
