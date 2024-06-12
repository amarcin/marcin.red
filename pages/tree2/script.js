// Create root and chart  
var root = am5.Root.new("chartdiv");

root.setThemes([
  am5themes_Animated.new(root)
]);

var container = root.container.children.push(am5.Container.new(root, {
  width: am5.percent(100),
  height: am5.percent(100),
  layout: root.verticalLayout
}));

var title = container.children.push(am5.Label.new(root, {
  text: "Marcin Family Tree",
  fontSize: 20,
  x: am5.percent(50),
  centerX: am5.percent(50)
}));

var series = container.children.push(am5hierarchy.ForceDirected.new(root, {
  downDepth: 1,
  initialDepth: 2,
  topDepth: 1,
  valueField: "value",
  categoryField: "name",
  childDataField: "children",
  xField: "x",
  yField: "y",
  idField: "id",
  linkWithField: "linkWith",
  minRadius: am5.percent(5),
  maxRadius: am5.percent(10)
}));


series.data.setAll([{
  name: "Root",
  value: 0,
  children: [{
    name: "Paul Marcin",
    id: "paul",
    x: am5.percent(40),
    y: am5.percent(20),
    children: [{
      name: "Jim Marcin",
      linkWith: ["paul", "janice"],  // Connect Jim to both Paul and Janice  
      children: [{
        name: "Maret Marcin",
        value: 90
      }, {
        name: "C2A0B2",
        value: 89
      }, {
        name: "C2A0C2",
        children: [{
          name: "C2A0C2A3",
          children: [{
            name: "C2A0C2A0A4",
            children: [{
              name: "C2A0C2A0A00",
              value: 90
            }, {
              name: "C2A0C2A0A01",
              value: 70
            }, {
              name: "C2A0C2A0A02",
              value: 66
            }, {
              name: "C2A0C2A0A03",
              value: 58
            }]
          }, {
            name: "C2A0C2A0B4",
            children: [{
              name: "C2A0C2A0B10",
              value: 80
            }, {
              name: "C2A0C2A0B11",
              value: 40
            }]
          }]
        }, {
          name: "C2A0C2B3",
          value: 44
        }]
      }, {
        name: "C2A0D2",
        children: [{
          name: "C2A0D3A3",
          value: 28
        }, {
          name: "C2A0D3B3",
          value: 14
        }]
      }]
    }, {
      // Removed "C2B1" and "C2C1" children  
    }]
  }, {
    name: "Janice",
    id: "janice",
    linkWith: ["paul"],
    x: am5.percent(60),
    y: am5.percent(20),
    children: [{
      name: "Child 1",
      value: 50
    }, {
      name: "Child 2",
      value: 45
    }, {
      name: "Child 3",
      value: 40
    }]
  }]
}]);

series.set("selectedDataItem", series.dataItems[0]);

var legend = container.children.push(am5.Legend.new(root, {
  centerX: am5.percent(90),
  x: am5.percent(50),
  layout: root.verticalLayout
}));  