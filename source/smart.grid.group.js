
/* Smart HTML Elements v6.0.0 (2020-Jan) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Group",class{addGroup(a){const b=this;if(b.dataSource&&b.grouping.enabled){const c=b.dataSource.groupBy.indexOf(a);-1===c&&(b.dataSource.groupBy.push(a),b.refresh(!0),b.refreshFilters())}}removeGroup(a){const b=this;if(b.dataSource&&b.grouping.enabled){const c=b.dataSource.groupBy.indexOf(a);0<=c&&(b.dataSource.groupBy.splice(c,1),b.refresh(!0),b.refreshFilters())}}clearGroups(){const a=this;a.dataSource&&a.grouping.enabled&&(a.dataSource.clearGroup(),a.refresh(!0),a.refreshFilters())}});