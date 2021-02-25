const fs = require('fs')
const yaml = require('js-yaml')
// const path = require('path')

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const ymlDoc = yaml.safeLoad(fs.readFileSync('./content/data/yaml/downloads.yaml', 'utf-8'))
    ymlDoc.forEach(element => {
        createPage({
            path: element.path,
            component: require.resolve('./src/templates/downloads.js'),
            context: {
                pageContent: element.content,
                multiHazardThreat: element.multiHazardThreat,
                physicalExposureB: element.physicalExposureB,
                physicalExposureS: element.physicalExposureS,
                riskDynamics: element.riskDynamics,
                socialFabric: element.socialFabric,
                // links: element.links,
            },
        })
    })
    const ymlDocER = yaml.safeLoad(fs.readFileSync("./content/data/yaml/economic-regions.yaml", "utf-8"))
    ymlDocER.forEach(element => {
      createPage({
        path: element.path,
        component: require.resolve("./src/templates/economicRegions.js"),
        context: {
          pageContent: element.content,
          aggregateData: element.aggregateData,
          downloadsPage: element.downloadsPage,
          // links: element.links,
        },
      })
    })
}



// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     const regex = [
//       /node_modules\/leaflet/,
//       /node_modules\\leaflet/
//     ]
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: regex,
//             use: loaders.null()
//           }
//         ]
//       }
//     })
//   }
// }


// exports.createPages = ({ actions }) => {
//   const { createPage } = actions
//   const ymlDocER = yaml.safeLoad(fs.readFileSync("./content/data/yaml/economic-regions.yaml", "utf-8"))
//   ymlDocER.forEach(element => {
//     createPage({
//       path: element.path,
//       component: require.resolve("./src/templates/economicRegions.js"),
//       context: {
//         pageContent: element.content,
//         aggregateData: element.aggregateData,
//         downloadsPage: element.downloadsPage,
//         // links: element.links,
//       },
//     })
//   })
// }