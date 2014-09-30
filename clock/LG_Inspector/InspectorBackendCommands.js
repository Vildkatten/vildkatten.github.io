// File is generated by Source/WebCore/inspector/CodeGeneratorInspector.py

// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Inspector.
InspectorBackend.registerInspectorDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Inspector");
InspectorBackend.registerEvent("Inspector.evaluateForTestInFrontend", ["testCallId", "script"]);
InspectorBackend.registerEvent("Inspector.inspect", ["object", "hints"]);
InspectorBackend.registerEvent("Inspector.didCreateWorker", ["id", "url", "isShared"]);
InspectorBackend.registerEvent("Inspector.didDestroyWorker", ["id"]);
InspectorBackend.registerCommand("Inspector.enable", [], []);
InspectorBackend.registerCommand("Inspector.disable", [], []);

// Memory.
InspectorBackend.registerMemoryDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Memory");
InspectorBackend.registerCommand("Memory.getDOMNodeCount", [], ["domGroups", "strings"]);
InspectorBackend.registerCommand("Memory.getProcessMemoryDistribution", [], ["distribution"]);

// Page.
InspectorBackend.registerPageDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Page");
InspectorBackend.registerEvent("Page.domContentEventFired", ["timestamp"]);
InspectorBackend.registerEvent("Page.loadEventFired", ["timestamp"]);
InspectorBackend.registerEvent("Page.frameNavigated", ["frame"]);
InspectorBackend.registerEvent("Page.frameDetached", ["frameId"]);
InspectorBackend.registerCommand("Page.enable", [], []);
InspectorBackend.registerCommand("Page.disable", [], []);
InspectorBackend.registerCommand("Page.addScriptToEvaluateOnLoad", [{"name": "scriptSource", "type": "string", "optional": false}], ["identifier"]);
InspectorBackend.registerCommand("Page.removeScriptToEvaluateOnLoad", [{"name": "identifier", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("Page.reload", [{"name": "ignoreCache", "type": "boolean", "optional": true}, {"name": "scriptToEvaluateOnLoad", "type": "string", "optional": true}], []);
InspectorBackend.registerCommand("Page.navigate", [{"name": "url", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("Page.getCookies", [], ["cookies", "cookiesString"]);
InspectorBackend.registerCommand("Page.deleteCookie", [{"name": "cookieName", "type": "string", "optional": false}, {"name": "domain", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("Page.getResourceTree", [], ["frameTree"]);
InspectorBackend.registerCommand("Page.getResourceContent", [{"name": "frameId", "type": "string", "optional": false}, {"name": "url", "type": "string", "optional": false}], ["content", "base64Encoded"]);
InspectorBackend.registerCommand("Page.searchInResource", [{"name": "frameId", "type": "string", "optional": false}, {"name": "url", "type": "string", "optional": false}, {"name": "query", "type": "string", "optional": false}, {"name": "caseSensitive", "type": "boolean", "optional": true}, {"name": "isRegex", "type": "boolean", "optional": true}], ["result"]);
InspectorBackend.registerCommand("Page.searchInResources", [{"name": "text", "type": "string", "optional": false}, {"name": "caseSensitive", "type": "boolean", "optional": true}, {"name": "isRegex", "type": "boolean", "optional": true}], ["result"]);
InspectorBackend.registerCommand("Page.setDocumentContent", [{"name": "frameId", "type": "string", "optional": false}, {"name": "html", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("Page.canOverrideDeviceMetrics", [], ["result"]);
InspectorBackend.registerCommand("Page.setDeviceMetricsOverride", [{"name": "width", "type": "number", "optional": false}, {"name": "height", "type": "number", "optional": false}, {"name": "fontScaleFactor", "type": "number", "optional": false}, {"name": "fitWindow", "type": "boolean", "optional": false}], []);
InspectorBackend.registerCommand("Page.setShowPaintRects", [{"name": "result", "type": "boolean", "optional": false}], []);
InspectorBackend.registerCommand("Page.getScriptExecutionStatus", [], ["result"]);
InspectorBackend.registerCommand("Page.setScriptExecutionDisabled", [{"name": "value", "type": "boolean", "optional": false}], []);

// Runtime.
InspectorBackend.registerRuntimeDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Runtime");
InspectorBackend.registerEvent("Runtime.isolatedContextCreated", ["context"]);
InspectorBackend.registerCommand("Runtime.evaluate", [{"name": "expression", "type": "string", "optional": false}, {"name": "objectGroup", "type": "string", "optional": true}, {"name": "includeCommandLineAPI", "type": "boolean", "optional": true}, {"name": "doNotPauseOnExceptionsAndMuteConsole", "type": "boolean", "optional": true}, {"name": "contextId", "type": "number", "optional": true}, {"name": "returnByValue", "type": "boolean", "optional": true}], ["result", "wasThrown"]);
InspectorBackend.registerCommand("Runtime.callFunctionOn", [{"name": "objectId", "type": "string", "optional": false}, {"name": "functionDeclaration", "type": "string", "optional": false}, {"name": "arguments", "type": "object", "optional": true}, {"name": "doNotPauseOnExceptionsAndMuteConsole", "type": "boolean", "optional": true}, {"name": "returnByValue", "type": "boolean", "optional": true}], ["result", "wasThrown"]);
InspectorBackend.registerCommand("Runtime.getProperties", [{"name": "objectId", "type": "string", "optional": false}, {"name": "ownProperties", "type": "boolean", "optional": true}], ["result"]);
InspectorBackend.registerCommand("Runtime.releaseObject", [{"name": "objectId", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("Runtime.releaseObjectGroup", [{"name": "objectGroup", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("Runtime.run", [], []);
InspectorBackend.registerCommand("Runtime.setReportExecutionContextCreation", [{"name": "enabled", "type": "boolean", "optional": false}], []);

// Console.
InspectorBackend.registerConsoleDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Console");
InspectorBackend.registerEvent("Console.messageAdded", ["message"]);
InspectorBackend.registerEvent("Console.messageRepeatCountUpdated", ["count"]);
InspectorBackend.registerEvent("Console.messagesCleared", []);
InspectorBackend.registerCommand("Console.enable", [], []);
InspectorBackend.registerCommand("Console.disable", [], []);
InspectorBackend.registerCommand("Console.clearMessages", [], []);
InspectorBackend.registerCommand("Console.setMonitoringXHREnabled", [{"name": "enabled", "type": "boolean", "optional": false}], []);
InspectorBackend.registerCommand("Console.addInspectedNode", [{"name": "nodeId", "type": "number", "optional": false}], []);
InspectorBackend.registerCommand("Console.addInspectedHeapObject", [{"name": "heapObjectId", "type": "number", "optional": false}], []);

// Network.
InspectorBackend.registerNetworkDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Network");
InspectorBackend.registerEvent("Network.requestWillBeSent", ["requestId", "frameId", "loaderId", "documentURL", "request", "timestamp", "initiator", "redirectResponse"]);
InspectorBackend.registerEvent("Network.requestServedFromCache", ["requestId"]);
InspectorBackend.registerEvent("Network.responseReceived", ["requestId", "frameId", "loaderId", "timestamp", "type", "response"]);
InspectorBackend.registerEvent("Network.dataReceived", ["requestId", "timestamp", "dataLength", "encodedDataLength"]);
InspectorBackend.registerEvent("Network.loadingFinished", ["requestId", "timestamp"]);
InspectorBackend.registerEvent("Network.loadingFailed", ["requestId", "timestamp", "errorText", "canceled"]);
InspectorBackend.registerEvent("Network.requestServedFromMemoryCache", ["requestId", "frameId", "loaderId", "documentURL", "timestamp", "initiator", "resource"]);
InspectorBackend.registerEvent("Network.webSocketWillSendHandshakeRequest", ["requestId", "timestamp", "request"]);
InspectorBackend.registerEvent("Network.webSocketHandshakeResponseReceived", ["requestId", "timestamp", "response"]);
InspectorBackend.registerEvent("Network.webSocketCreated", ["requestId", "url"]);
InspectorBackend.registerEvent("Network.webSocketClosed", ["requestId", "timestamp"]);
InspectorBackend.registerEvent("Network.webSocketFrameReceived", ["requestId", "timestamp", "response"]);
InspectorBackend.registerEvent("Network.webSocketFrameError", ["requestId", "timestamp", "errorMessage"]);
InspectorBackend.registerEvent("Network.webSocketFrameSent", ["requestId", "timestamp", "response"]);
InspectorBackend.registerCommand("Network.enable", [], []);
InspectorBackend.registerCommand("Network.disable", [], []);
InspectorBackend.registerCommand("Network.setUserAgentOverride", [{"name": "userAgent", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("Network.setExtraHTTPHeaders", [{"name": "headers", "type": "object", "optional": false}], []);
InspectorBackend.registerCommand("Network.getResponseBody", [{"name": "requestId", "type": "string", "optional": false}], ["body", "base64Encoded"]);
InspectorBackend.registerCommand("Network.canClearBrowserCache", [], ["result"]);
InspectorBackend.registerCommand("Network.clearBrowserCache", [], []);
InspectorBackend.registerCommand("Network.canClearBrowserCookies", [], ["result"]);
InspectorBackend.registerCommand("Network.clearBrowserCookies", [], []);
InspectorBackend.registerCommand("Network.setCacheDisabled", [{"name": "cacheDisabled", "type": "boolean", "optional": false}], []);

// Database.
InspectorBackend.registerDatabaseDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Database");
InspectorBackend.registerEvent("Database.addDatabase", ["database"]);
InspectorBackend.registerEvent("Database.sqlTransactionSucceeded", ["transactionId", "columnNames", "values"]);
InspectorBackend.registerEvent("Database.sqlTransactionFailed", ["transactionId", "sqlError"]);
InspectorBackend.registerCommand("Database.enable", [], []);
InspectorBackend.registerCommand("Database.disable", [], []);
InspectorBackend.registerCommand("Database.getDatabaseTableNames", [{"name": "databaseId", "type": "string", "optional": false}], ["tableNames"]);
InspectorBackend.registerCommand("Database.executeSQL", [{"name": "databaseId", "type": "string", "optional": false}, {"name": "query", "type": "string", "optional": false}], ["success", "transactionId"]);

// IndexedDB.
InspectorBackend.registerIndexedDBDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "IndexedDB");
InspectorBackend.registerEvent("IndexedDB.databaseNamesLoaded", ["requestId", "securityOriginWithDatabaseNames"]);
InspectorBackend.registerEvent("IndexedDB.databaseLoaded", ["requestId", "databaseWithObjectStores"]);
InspectorBackend.registerEvent("IndexedDB.objectStoreDataLoaded", ["requestId", "objectStoreDataEntries", "hasMore"]);
InspectorBackend.registerEvent("IndexedDB.indexDataLoaded", ["requestId", "indexDataEntries", "hasMore"]);
InspectorBackend.registerCommand("IndexedDB.enable", [], []);
InspectorBackend.registerCommand("IndexedDB.disable", [], []);
InspectorBackend.registerCommand("IndexedDB.requestDatabaseNamesForFrame", [{"name": "requestId", "type": "number", "optional": false}, {"name": "frameId", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("IndexedDB.requestDatabase", [{"name": "requestId", "type": "number", "optional": false}, {"name": "frameId", "type": "string", "optional": false}, {"name": "databaseName", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("IndexedDB.requestData", [{"name": "requestId", "type": "number", "optional": false}, {"name": "frameId", "type": "string", "optional": false}, {"name": "databaseName", "type": "string", "optional": false}, {"name": "objectStoreName", "type": "string", "optional": false}, {"name": "indexName", "type": "string", "optional": false}, {"name": "skipCount", "type": "number", "optional": false}, {"name": "pageSize", "type": "number", "optional": false}, {"name": "keyRange", "type": "object", "optional": true}], []);

// DOMStorage.
InspectorBackend.registerDOMStorageDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "DOMStorage");
InspectorBackend.registerEvent("DOMStorage.addDOMStorage", ["storage"]);
InspectorBackend.registerEvent("DOMStorage.domStorageUpdated", ["storageId"]);
InspectorBackend.registerCommand("DOMStorage.enable", [], []);
InspectorBackend.registerCommand("DOMStorage.disable", [], []);
InspectorBackend.registerCommand("DOMStorage.getDOMStorageEntries", [{"name": "storageId", "type": "string", "optional": false}], ["entries"]);
InspectorBackend.registerCommand("DOMStorage.setDOMStorageItem", [{"name": "storageId", "type": "string", "optional": false}, {"name": "key", "type": "string", "optional": false}, {"name": "value", "type": "string", "optional": false}], ["success"]);
InspectorBackend.registerCommand("DOMStorage.removeDOMStorageItem", [{"name": "storageId", "type": "string", "optional": false}, {"name": "key", "type": "string", "optional": false}], ["success"]);

// ApplicationCache.
InspectorBackend.registerApplicationCacheDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "ApplicationCache");
InspectorBackend.registerEvent("ApplicationCache.applicationCacheStatusUpdated", ["frameId", "manifestURL", "status"]);
InspectorBackend.registerEvent("ApplicationCache.networkStateUpdated", ["isNowOnline"]);
InspectorBackend.registerCommand("ApplicationCache.getFramesWithManifests", [], ["frameIds"]);
InspectorBackend.registerCommand("ApplicationCache.enable", [], []);
InspectorBackend.registerCommand("ApplicationCache.getManifestForFrame", [{"name": "frameId", "type": "string", "optional": false}], ["manifestURL"]);
InspectorBackend.registerCommand("ApplicationCache.getApplicationCacheForFrame", [{"name": "frameId", "type": "string", "optional": false}], ["applicationCache"]);

// FileSystem.
InspectorBackend.registerFileSystemDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "FileSystem");
InspectorBackend.registerEvent("FileSystem.fileSystemRootReceived", ["requestId", "errorCode", "root"]);
InspectorBackend.registerEvent("FileSystem.directoryContentReceived", ["requestId", "errorCode", "entries"]);
InspectorBackend.registerCommand("FileSystem.enable", [], []);
InspectorBackend.registerCommand("FileSystem.disable", [], []);
InspectorBackend.registerCommand("FileSystem.requestFileSystemRoot", [{"name": "origin", "type": "string", "optional": false}, {"name": "type", "type": "string", "optional": false}], ["requestId"]);
InspectorBackend.registerCommand("FileSystem.requestDirectoryContent", [{"name": "url", "type": "string", "optional": false}], ["requestId"]);

// DOM.
InspectorBackend.registerDOMDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "DOM");
InspectorBackend.registerEvent("DOM.documentUpdated", []);
InspectorBackend.registerEvent("DOM.setChildNodes", ["parentId", "nodes"]);
InspectorBackend.registerEvent("DOM.attributeModified", ["nodeId", "name", "value"]);
InspectorBackend.registerEvent("DOM.attributeRemoved", ["nodeId", "name"]);
InspectorBackend.registerEvent("DOM.inlineStyleInvalidated", ["nodeIds"]);
InspectorBackend.registerEvent("DOM.characterDataModified", ["nodeId", "characterData"]);
InspectorBackend.registerEvent("DOM.childNodeCountUpdated", ["nodeId", "childNodeCount"]);
InspectorBackend.registerEvent("DOM.childNodeInserted", ["parentNodeId", "previousNodeId", "node"]);
InspectorBackend.registerEvent("DOM.childNodeRemoved", ["parentNodeId", "nodeId"]);
InspectorBackend.registerEvent("DOM.shadowRootPushed", ["hostId", "root"]);
InspectorBackend.registerEvent("DOM.shadowRootPopped", ["hostId", "rootId"]);
InspectorBackend.registerCommand("DOM.getDocument", [], ["root"]);
InspectorBackend.registerCommand("DOM.requestChildNodes", [{"name": "nodeId", "type": "number", "optional": false}], []);
InspectorBackend.registerCommand("DOM.querySelector", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "selector", "type": "string", "optional": false}], ["nodeId"]);
InspectorBackend.registerCommand("DOM.querySelectorAll", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "selector", "type": "string", "optional": false}], ["nodeIds"]);
InspectorBackend.registerCommand("DOM.setNodeName", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "name", "type": "string", "optional": false}], ["nodeId"]);
InspectorBackend.registerCommand("DOM.setNodeValue", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "value", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("DOM.removeNode", [{"name": "nodeId", "type": "number", "optional": false}], []);
InspectorBackend.registerCommand("DOM.setAttributeValue", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "name", "type": "string", "optional": false}, {"name": "value", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("DOM.setAttributesAsText", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "text", "type": "string", "optional": false}, {"name": "name", "type": "string", "optional": true}], []);
InspectorBackend.registerCommand("DOM.removeAttribute", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "name", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("DOM.getEventListenersForNode", [{"name": "nodeId", "type": "number", "optional": false}], ["listeners"]);
InspectorBackend.registerCommand("DOM.getOuterHTML", [{"name": "nodeId", "type": "number", "optional": false}], ["outerHTML"]);
InspectorBackend.registerCommand("DOM.setOuterHTML", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "outerHTML", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("DOM.performSearch", [{"name": "query", "type": "string", "optional": false}], ["searchId", "resultCount"]);
InspectorBackend.registerCommand("DOM.getSearchResults", [{"name": "searchId", "type": "string", "optional": false}, {"name": "fromIndex", "type": "number", "optional": false}, {"name": "toIndex", "type": "number", "optional": false}], ["nodeIds"]);
InspectorBackend.registerCommand("DOM.discardSearchResults", [{"name": "searchId", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("DOM.requestNode", [{"name": "objectId", "type": "string", "optional": false}], ["nodeId"]);
InspectorBackend.registerCommand("DOM.setInspectModeEnabled", [{"name": "enabled", "type": "boolean", "optional": false}, {"name": "highlightConfig", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("DOM.highlightRect", [{"name": "x", "type": "number", "optional": false}, {"name": "y", "type": "number", "optional": false}, {"name": "width", "type": "number", "optional": false}, {"name": "height", "type": "number", "optional": false}, {"name": "color", "type": "object", "optional": true}, {"name": "outlineColor", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("DOM.highlightNode", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "highlightConfig", "type": "object", "optional": false}], []);
InspectorBackend.registerCommand("DOM.hideHighlight", [], []);
InspectorBackend.registerCommand("DOM.highlightFrame", [{"name": "frameId", "type": "string", "optional": false}, {"name": "contentColor", "type": "object", "optional": true}, {"name": "contentOutlineColor", "type": "object", "optional": true}], []);
InspectorBackend.registerCommand("DOM.pushNodeByPathToFrontend", [{"name": "path", "type": "string", "optional": false}], ["nodeId"]);
InspectorBackend.registerCommand("DOM.resolveNode", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "objectGroup", "type": "string", "optional": true}], ["object"]);
InspectorBackend.registerCommand("DOM.getAttributes", [{"name": "nodeId", "type": "number", "optional": false}], ["attributes"]);
InspectorBackend.registerCommand("DOM.moveTo", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "targetNodeId", "type": "number", "optional": false}, {"name": "insertBeforeNodeId", "type": "number", "optional": true}], ["nodeId"]);
InspectorBackend.registerCommand("DOM.setTouchEmulationEnabled", [{"name": "enabled", "type": "boolean", "optional": false}], []);
InspectorBackend.registerCommand("DOM.undo", [], []);
InspectorBackend.registerCommand("DOM.redo", [], []);
InspectorBackend.registerCommand("DOM.markUndoableState", [], []);

// CSS.
InspectorBackend.registerCSSDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "CSS");
InspectorBackend.registerEvent("CSS.mediaQueryResultChanged", []);
InspectorBackend.registerEvent("CSS.styleSheetChanged", ["styleSheetId"]);
InspectorBackend.registerCommand("CSS.enable", [], []);
InspectorBackend.registerCommand("CSS.disable", [], []);
InspectorBackend.registerCommand("CSS.getMatchedStylesForNode", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "forcedPseudoClasses", "type": "object", "optional": true}, {"name": "includePseudo", "type": "boolean", "optional": true}, {"name": "includeInherited", "type": "boolean", "optional": true}], ["matchedCSSRules", "pseudoElements", "inherited"]);
InspectorBackend.registerCommand("CSS.getInlineStylesForNode", [{"name": "nodeId", "type": "number", "optional": false}], ["inlineStyle", "attributesStyle"]);
InspectorBackend.registerCommand("CSS.getComputedStyleForNode", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "forcedPseudoClasses", "type": "object", "optional": true}], ["computedStyle"]);
InspectorBackend.registerCommand("CSS.getAllStyleSheets", [], ["headers"]);
InspectorBackend.registerCommand("CSS.getStyleSheet", [{"name": "styleSheetId", "type": "string", "optional": false}], ["styleSheet"]);
InspectorBackend.registerCommand("CSS.getStyleSheetText", [{"name": "styleSheetId", "type": "string", "optional": false}], ["text"]);
InspectorBackend.registerCommand("CSS.setStyleSheetText", [{"name": "styleSheetId", "type": "string", "optional": false}, {"name": "text", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("CSS.setPropertyText", [{"name": "styleId", "type": "object", "optional": false}, {"name": "propertyIndex", "type": "number", "optional": false}, {"name": "text", "type": "string", "optional": false}, {"name": "overwrite", "type": "boolean", "optional": false}], ["style"]);
InspectorBackend.registerCommand("CSS.toggleProperty", [{"name": "styleId", "type": "object", "optional": false}, {"name": "propertyIndex", "type": "number", "optional": false}, {"name": "disable", "type": "boolean", "optional": false}], ["style"]);
InspectorBackend.registerCommand("CSS.setRuleSelector", [{"name": "ruleId", "type": "object", "optional": false}, {"name": "selector", "type": "string", "optional": false}], ["rule"]);
InspectorBackend.registerCommand("CSS.addRule", [{"name": "contextNodeId", "type": "number", "optional": false}, {"name": "selector", "type": "string", "optional": false}], ["rule"]);
InspectorBackend.registerCommand("CSS.getSupportedCSSProperties", [], ["cssProperties"]);
InspectorBackend.registerCommand("CSS.startSelectorProfiler", [], []);
InspectorBackend.registerCommand("CSS.stopSelectorProfiler", [], ["profile"]);

// Timeline.
InspectorBackend.registerTimelineDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Timeline");
InspectorBackend.registerEvent("Timeline.eventRecorded", ["record"]);
InspectorBackend.registerCommand("Timeline.start", [{"name": "maxCallStackDepth", "type": "number", "optional": true}], []);
InspectorBackend.registerCommand("Timeline.stop", [], []);
InspectorBackend.registerCommand("Timeline.setIncludeMemoryDetails", [{"name": "enabled", "type": "boolean", "optional": false}], []);
InspectorBackend.registerCommand("Timeline.supportsFrameInstrumentation", [], ["result"]);

// Debugger.
InspectorBackend.registerDebuggerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Debugger");
InspectorBackend.registerEvent("Debugger.globalObjectCleared", []);
InspectorBackend.registerEvent("Debugger.scriptParsed", ["scriptId", "url", "startLine", "startColumn", "endLine", "endColumn", "isContentScript", "sourceMapURL"]);
InspectorBackend.registerEvent("Debugger.scriptFailedToParse", ["url", "scriptSource", "startLine", "errorLine", "errorMessage"]);
InspectorBackend.registerEvent("Debugger.breakpointResolved", ["breakpointId", "location"]);
InspectorBackend.registerEvent("Debugger.paused", ["callFrames", "reason", "data"]);
InspectorBackend.registerEvent("Debugger.resumed", []);
InspectorBackend.registerCommand("Debugger.causesRecompilation", [], ["result"]);
InspectorBackend.registerCommand("Debugger.supportsSeparateScriptCompilationAndExecution", [], ["result"]);
InspectorBackend.registerCommand("Debugger.enable", [], []);
InspectorBackend.registerCommand("Debugger.disable", [], []);
InspectorBackend.registerCommand("Debugger.setBreakpointsActive", [{"name": "active", "type": "boolean", "optional": false}], []);
InspectorBackend.registerCommand("Debugger.setBreakpointByUrl", [{"name": "lineNumber", "type": "number", "optional": false}, {"name": "url", "type": "string", "optional": true}, {"name": "urlRegex", "type": "string", "optional": true}, {"name": "columnNumber", "type": "number", "optional": true}, {"name": "condition", "type": "string", "optional": true}], ["breakpointId", "locations"]);
InspectorBackend.registerCommand("Debugger.setBreakpoint", [{"name": "location", "type": "object", "optional": false}, {"name": "condition", "type": "string", "optional": true}], ["breakpointId", "actualLocation"]);
InspectorBackend.registerCommand("Debugger.removeBreakpoint", [{"name": "breakpointId", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("Debugger.continueToLocation", [{"name": "location", "type": "object", "optional": false}], []);
InspectorBackend.registerCommand("Debugger.stepOver", [], []);
InspectorBackend.registerCommand("Debugger.stepInto", [], []);
InspectorBackend.registerCommand("Debugger.stepOut", [], []);
InspectorBackend.registerCommand("Debugger.pause", [], []);
InspectorBackend.registerCommand("Debugger.resume", [], []);
InspectorBackend.registerCommand("Debugger.searchInContent", [{"name": "scriptId", "type": "string", "optional": false}, {"name": "query", "type": "string", "optional": false}, {"name": "caseSensitive", "type": "boolean", "optional": true}, {"name": "isRegex", "type": "boolean", "optional": true}], ["result"]);
InspectorBackend.registerCommand("Debugger.canSetScriptSource", [], ["result"]);
InspectorBackend.registerCommand("Debugger.setScriptSource", [{"name": "scriptId", "type": "string", "optional": false}, {"name": "scriptSource", "type": "string", "optional": false}, {"name": "preview", "type": "boolean", "optional": true}], ["callFrames", "result"]);
InspectorBackend.registerCommand("Debugger.restartFrame", [{"name": "callFrameId", "type": "string", "optional": false}], ["callFrames", "result"]);
InspectorBackend.registerCommand("Debugger.getScriptSource", [{"name": "scriptId", "type": "string", "optional": false}], ["scriptSource"]);
InspectorBackend.registerCommand("Debugger.getFunctionDetails", [{"name": "functionId", "type": "string", "optional": false}], ["details"]);
InspectorBackend.registerCommand("Debugger.setPauseOnExceptions", [{"name": "state", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("Debugger.evaluateOnCallFrame", [{"name": "callFrameId", "type": "string", "optional": false}, {"name": "expression", "type": "string", "optional": false}, {"name": "objectGroup", "type": "string", "optional": true}, {"name": "includeCommandLineAPI", "type": "boolean", "optional": true}, {"name": "doNotPauseOnExceptionsAndMuteConsole", "type": "boolean", "optional": true}, {"name": "returnByValue", "type": "boolean", "optional": true}], ["result", "wasThrown"]);
InspectorBackend.registerCommand("Debugger.compileScript", [{"name": "expression", "type": "string", "optional": false}, {"name": "sourceURL", "type": "string", "optional": false}], ["scriptId", "syntaxErrorMessage"]);
InspectorBackend.registerCommand("Debugger.runScript", [{"name": "contextId", "type": "number", "optional": true}, {"name": "scriptId", "type": "string", "optional": false}, {"name": "objectGroup", "type": "string", "optional": true}, {"name": "doNotPauseOnExceptionsAndMuteConsole", "type": "boolean", "optional": true}], ["result", "wasThrown"]);

// DOMDebugger.
InspectorBackend.registerCommand("DOMDebugger.setDOMBreakpoint", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "type", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("DOMDebugger.removeDOMBreakpoint", [{"name": "nodeId", "type": "number", "optional": false}, {"name": "type", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("DOMDebugger.setEventListenerBreakpoint", [{"name": "eventName", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("DOMDebugger.removeEventListenerBreakpoint", [{"name": "eventName", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("DOMDebugger.setInstrumentationBreakpoint", [{"name": "eventName", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("DOMDebugger.removeInstrumentationBreakpoint", [{"name": "eventName", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("DOMDebugger.setXHRBreakpoint", [{"name": "url", "type": "string", "optional": false}], []);
InspectorBackend.registerCommand("DOMDebugger.removeXHRBreakpoint", [{"name": "url", "type": "string", "optional": false}], []);

// Profiler.
InspectorBackend.registerProfilerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Profiler");
InspectorBackend.registerEvent("Profiler.addProfileHeader", ["header"]);
InspectorBackend.registerEvent("Profiler.addHeapSnapshotChunk", ["uid", "chunk"]);
InspectorBackend.registerEvent("Profiler.finishHeapSnapshot", ["uid"]);
InspectorBackend.registerEvent("Profiler.setRecordingProfile", ["isProfiling"]);
InspectorBackend.registerEvent("Profiler.resetProfiles", []);
InspectorBackend.registerEvent("Profiler.reportHeapSnapshotProgress", ["done", "total"]);
InspectorBackend.registerCommand("Profiler.causesRecompilation", [], ["result"]);
InspectorBackend.registerCommand("Profiler.isSampling", [], ["result"]);
InspectorBackend.registerCommand("Profiler.hasHeapProfiler", [], ["result"]);
InspectorBackend.registerCommand("Profiler.enable", [], []);
InspectorBackend.registerCommand("Profiler.disable", [], []);
InspectorBackend.registerCommand("Profiler.start", [], []);
InspectorBackend.registerCommand("Profiler.stop", [], []);
InspectorBackend.registerCommand("Profiler.getProfileHeaders", [], ["headers"]);
InspectorBackend.registerCommand("Profiler.getProfile", [{"name": "type", "type": "string", "optional": false}, {"name": "uid", "type": "number", "optional": false}], ["profile"]);
InspectorBackend.registerCommand("Profiler.removeProfile", [{"name": "type", "type": "string", "optional": false}, {"name": "uid", "type": "number", "optional": false}], []);
InspectorBackend.registerCommand("Profiler.clearProfiles", [], []);
InspectorBackend.registerCommand("Profiler.takeHeapSnapshot", [], []);
InspectorBackend.registerCommand("Profiler.collectGarbage", [], []);
InspectorBackend.registerCommand("Profiler.getObjectByHeapObjectId", [{"name": "objectId", "type": "string", "optional": false}, {"name": "objectGroup", "type": "string", "optional": true}], ["result"]);
InspectorBackend.registerCommand("Profiler.getHeapObjectId", [{"name": "objectId", "type": "string", "optional": false}], ["heapSnapshotObjectId"]);

// Worker.
InspectorBackend.registerWorkerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Worker");
InspectorBackend.registerEvent("Worker.workerCreated", ["workerId", "url", "inspectorConnected"]);
InspectorBackend.registerEvent("Worker.workerTerminated", ["workerId"]);
InspectorBackend.registerEvent("Worker.dispatchMessageFromWorker", ["workerId", "message"]);
InspectorBackend.registerEvent("Worker.disconnectedFromWorker", []);
InspectorBackend.registerCommand("Worker.setWorkerInspectionEnabled", [{"name": "value", "type": "boolean", "optional": false}], []);
InspectorBackend.registerCommand("Worker.sendMessageToWorker", [{"name": "workerId", "type": "number", "optional": false}, {"name": "message", "type": "object", "optional": false}], []);
InspectorBackend.registerCommand("Worker.connectToWorker", [{"name": "workerId", "type": "number", "optional": false}], []);
InspectorBackend.registerCommand("Worker.disconnectFromWorker", [{"name": "workerId", "type": "number", "optional": false}], []);
InspectorBackend.registerCommand("Worker.setAutoconnectToWorkers", [{"name": "value", "type": "boolean", "optional": false}], []);

// WebGL.
InspectorBackend.registerWebGLDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "WebGL");
InspectorBackend.registerCommand("WebGL.enable", [], []);
InspectorBackend.registerCommand("WebGL.disable", [], []);


