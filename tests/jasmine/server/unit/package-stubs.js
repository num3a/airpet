// DEPENDS ON GLOBAL OBJECT: 'ComponentMocker'

var packageMetadata = {
  "reload": {},
  "json": {},
  "base64": {
    "Base64": {
      "type": "object",
      "members": {
        "encode": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        },
        "decode": {
          "type": "function"
        }
      }
    }
  },
  "ejson": {
    "EJSON": {
      "type": "object",
      "members": {
        "addType": {
          "type": "function"
        },
        "toJSONValue": {
          "type": "function"
        },
        "fromJSONValue": {
          "type": "function"
        },
        "stringify": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "isBinary": {
          "type": "function"
        },
        "equals": {
          "type": "function"
        },
        "clone": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        }
      }
    },
    "EJSONTest": {
      "type": "object"
    }
  },
  "logging": {
    "Log": {
      "type": "function",
      "members": {
        "outputFormat": {
          "type": "constant",
          "value": "json"
        },
        "debug": {
          "type": "function"
        },
        "info": {
          "type": "function"
        },
        "warn": {
          "type": "function"
        },
        "error": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "format": {
          "type": "function"
        },
        "objFromText": {
          "type": "function"
        }
      }
    }
  },
  "routepolicy": {
    "RoutePolicy": {
      "type": "object",
      "members": {
        "urlPrefixTypes": {
          "type": "object",
          "members": {
            "/sockjs/": {
              "type": "constant",
              "value": "network"
            }
          }
        },
        "urlPrefixMatches": {
          "type": "function"
        },
        "checkType": {
          "type": "function"
        },
        "checkUrlPrefix": {
          "type": "function"
        },
        "checkForConflictWithStatic": {
          "type": "function"
        },
        "declare": {
          "type": "function"
        },
        "isValidUrl": {
          "type": "function"
        },
        "classify": {
          "type": "function"
        },
        "urlPrefixesFor": {
          "type": "function"
        }
      }
    },
    "RoutePolicyTest": {
      "type": "object",
      "members": {
        "Constructor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "urlPrefixMatches": {
                  "type": "function"
                },
                "checkType": {
                  "type": "function"
                },
                "checkUrlPrefix": {
                  "type": "function"
                },
                "checkForConflictWithStatic": {
                  "type": "function"
                },
                "declare": {
                  "type": "function"
                },
                "isValidUrl": {
                  "type": "function"
                },
                "classify": {
                  "type": "function"
                },
                "urlPrefixesFor": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "tracker": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "deps": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "htmljs": {
    "HTML": {
      "type": "object",
      "members": {
        "Visitor": {
          "type": "function",
          "members": {
            "def": {
              "type": "function",
              "refID": 2
            },
            "extend": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "visit": {
                  "type": "function",
                  "refID": 7
                },
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function",
                  "refID": 25
                }
              }
            }
          }
        },
        "TransformingVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function",
                  "refID": 29
                },
                "visitPrimitive": {
                  "ref": 29
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "ref": 29
                },
                "visitCharRef": {
                  "ref": 29
                },
                "visitRaw": {
                  "ref": 29
                },
                "visitObject": {
                  "ref": 29
                },
                "visitFunction": {
                  "ref": 29
                },
                "visitTag": {
                  "type": "function"
                },
                "visitChildren": {
                  "type": "function"
                },
                "visitAttributes": {
                  "type": "function"
                },
                "visitAttribute": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                }
              }
            }
          }
        },
        "ToTextVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toHTML": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "ToHTMLVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toText": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "Tag": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 82
            },
            "prototype": {
              "type": "object",
              "members": {
                "tagName": {
                  "type": "constant",
                  "value": ""
                },
                "attrs": {
                  "type": "null",
                  "value": null
                },
                "children": {
                  "type": "array",
                  "refID": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Attrs": {
          "type": "function"
        },
        "getTag": {
          "type": "function"
        },
        "ensureTag": {
          "type": "function"
        },
        "isTagEnsured": {
          "type": "function"
        },
        "getSymbolName": {
          "type": "function"
        },
        "knownElementNames": {
          "type": "array"
        },
        "knownSVGElementNames": {
          "type": "array"
        },
        "voidElementNames": {
          "type": "array"
        },
        "isKnownElement": {
          "type": "function"
        },
        "isKnownSVGElement": {
          "type": "function"
        },
        "isVoidElement": {
          "type": "function"
        },
        "A": {
          "type": "function",
          "refID": 104,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 104
                },
                "tagName": {
                  "type": "constant",
                  "value": "a"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ABBR": {
          "type": "function",
          "refID": 106,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 106
                },
                "tagName": {
                  "type": "constant",
                  "value": "abbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ACRONYM": {
          "type": "function",
          "refID": 108,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 108
                },
                "tagName": {
                  "type": "constant",
                  "value": "acronym"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ADDRESS": {
          "type": "function",
          "refID": 110,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 110
                },
                "tagName": {
                  "type": "constant",
                  "value": "address"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "APPLET": {
          "type": "function",
          "refID": 112,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 112
                },
                "tagName": {
                  "type": "constant",
                  "value": "applet"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AREA": {
          "type": "function",
          "refID": 114,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 114
                },
                "tagName": {
                  "type": "constant",
                  "value": "area"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ARTICLE": {
          "type": "function",
          "refID": 116,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 116
                },
                "tagName": {
                  "type": "constant",
                  "value": "article"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ASIDE": {
          "type": "function",
          "refID": 118,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 118
                },
                "tagName": {
                  "type": "constant",
                  "value": "aside"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AUDIO": {
          "type": "function",
          "refID": 120,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 120
                },
                "tagName": {
                  "type": "constant",
                  "value": "audio"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "B": {
          "type": "function",
          "refID": 122,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 122
                },
                "tagName": {
                  "type": "constant",
                  "value": "b"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASE": {
          "type": "function",
          "refID": 124,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 124
                },
                "tagName": {
                  "type": "constant",
                  "value": "base"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASEFONT": {
          "type": "function",
          "refID": 126,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 126
                },
                "tagName": {
                  "type": "constant",
                  "value": "basefont"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDI": {
          "type": "function",
          "refID": 128,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 128
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdi"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDO": {
          "type": "function",
          "refID": 130,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 130
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdo"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BIG": {
          "type": "function",
          "refID": 132,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 132
                },
                "tagName": {
                  "type": "constant",
                  "value": "big"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BLOCKQUOTE": {
          "type": "function",
          "refID": 134,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 134
                },
                "tagName": {
                  "type": "constant",
                  "value": "blockquote"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BODY": {
          "type": "function",
          "refID": 136,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 136
                },
                "tagName": {
                  "type": "constant",
                  "value": "body"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BR": {
          "type": "function",
          "refID": 138,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 138
                },
                "tagName": {
                  "type": "constant",
                  "value": "br"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BUTTON": {
          "type": "function",
          "refID": 140,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 140
                },
                "tagName": {
                  "type": "constant",
                  "value": "button"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CANVAS": {
          "type": "function",
          "refID": 142,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 142
                },
                "tagName": {
                  "type": "constant",
                  "value": "canvas"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CAPTION": {
          "type": "function",
          "refID": 144,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 144
                },
                "tagName": {
                  "type": "constant",
                  "value": "caption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CENTER": {
          "type": "function",
          "refID": 146,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 146
                },
                "tagName": {
                  "type": "constant",
                  "value": "center"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CITE": {
          "type": "function",
          "refID": 148,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 148
                },
                "tagName": {
                  "type": "constant",
                  "value": "cite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CODE": {
          "type": "function",
          "refID": 150,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 150
                },
                "tagName": {
                  "type": "constant",
                  "value": "code"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COL": {
          "type": "function",
          "refID": 152,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 152
                },
                "tagName": {
                  "type": "constant",
                  "value": "col"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLGROUP": {
          "type": "function",
          "refID": 154,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 154
                },
                "tagName": {
                  "type": "constant",
                  "value": "colgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COMMAND": {
          "type": "function",
          "refID": 156,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 156
                },
                "tagName": {
                  "type": "constant",
                  "value": "command"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATA": {
          "type": "function",
          "refID": 158,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 158
                },
                "tagName": {
                  "type": "constant",
                  "value": "data"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATAGRID": {
          "type": "function",
          "refID": 160,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 160
                },
                "tagName": {
                  "type": "constant",
                  "value": "datagrid"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATALIST": {
          "type": "function",
          "refID": 162,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 162
                },
                "tagName": {
                  "type": "constant",
                  "value": "datalist"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DD": {
          "type": "function",
          "refID": 164,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 164
                },
                "tagName": {
                  "type": "constant",
                  "value": "dd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEL": {
          "type": "function",
          "refID": 166,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 166
                },
                "tagName": {
                  "type": "constant",
                  "value": "del"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DETAILS": {
          "type": "function",
          "refID": 168,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 168
                },
                "tagName": {
                  "type": "constant",
                  "value": "details"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DFN": {
          "type": "function",
          "refID": 170,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 170
                },
                "tagName": {
                  "type": "constant",
                  "value": "dfn"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIR": {
          "type": "function",
          "refID": 172,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 172
                },
                "tagName": {
                  "type": "constant",
                  "value": "dir"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIV": {
          "type": "function",
          "refID": 174,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 174
                },
                "tagName": {
                  "type": "constant",
                  "value": "div"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DL": {
          "type": "function",
          "refID": 176,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 176
                },
                "tagName": {
                  "type": "constant",
                  "value": "dl"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DT": {
          "type": "function",
          "refID": 178,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 178
                },
                "tagName": {
                  "type": "constant",
                  "value": "dt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EM": {
          "type": "function",
          "refID": 180,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 180
                },
                "tagName": {
                  "type": "constant",
                  "value": "em"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EMBED": {
          "type": "function",
          "refID": 182,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 182
                },
                "tagName": {
                  "type": "constant",
                  "value": "embed"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EVENTSOURCE": {
          "type": "function",
          "refID": 184,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 184
                },
                "tagName": {
                  "type": "constant",
                  "value": "eventsource"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIELDSET": {
          "type": "function",
          "refID": 186,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 186
                },
                "tagName": {
                  "type": "constant",
                  "value": "fieldset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGCAPTION": {
          "type": "function",
          "refID": 188,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 188
                },
                "tagName": {
                  "type": "constant",
                  "value": "figcaption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGURE": {
          "type": "function",
          "refID": 190,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 190
                },
                "tagName": {
                  "type": "constant",
                  "value": "figure"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT": {
          "type": "function",
          "refID": 192,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 192
                },
                "tagName": {
                  "type": "constant",
                  "value": "font"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOOTER": {
          "type": "function",
          "refID": 194,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 194
                },
                "tagName": {
                  "type": "constant",
                  "value": "footer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FORM": {
          "type": "function",
          "refID": 196,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 196
                },
                "tagName": {
                  "type": "constant",
                  "value": "form"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAME": {
          "type": "function",
          "refID": 198,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 198
                },
                "tagName": {
                  "type": "constant",
                  "value": "frame"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAMESET": {
          "type": "function",
          "refID": 200,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 200
                },
                "tagName": {
                  "type": "constant",
                  "value": "frameset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H1": {
          "type": "function",
          "refID": 202,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 202
                },
                "tagName": {
                  "type": "constant",
                  "value": "h1"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H2": {
          "type": "function",
          "refID": 204,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 204
                },
                "tagName": {
                  "type": "constant",
                  "value": "h2"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H3": {
          "type": "function",
          "refID": 206,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 206
                },
                "tagName": {
                  "type": "constant",
                  "value": "h3"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H4": {
          "type": "function",
          "refID": 208,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 208
                },
                "tagName": {
                  "type": "constant",
                  "value": "h4"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H5": {
          "type": "function",
          "refID": 210,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 210
                },
                "tagName": {
                  "type": "constant",
                  "value": "h5"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H6": {
          "type": "function",
          "refID": 212,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 212
                },
                "tagName": {
                  "type": "constant",
                  "value": "h6"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEAD": {
          "type": "function",
          "refID": 214,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 214
                },
                "tagName": {
                  "type": "constant",
                  "value": "head"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEADER": {
          "type": "function",
          "refID": 216,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 216
                },
                "tagName": {
                  "type": "constant",
                  "value": "header"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HGROUP": {
          "type": "function",
          "refID": 218,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 218
                },
                "tagName": {
                  "type": "constant",
                  "value": "hgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HR": {
          "type": "function",
          "refID": 220,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 220
                },
                "tagName": {
                  "type": "constant",
                  "value": "hr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HTML": {
          "type": "function",
          "refID": 222,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 222
                },
                "tagName": {
                  "type": "constant",
                  "value": "html"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "I": {
          "type": "function",
          "refID": 224,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 224
                },
                "tagName": {
                  "type": "constant",
                  "value": "i"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IFRAME": {
          "type": "function",
          "refID": 226,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 226
                },
                "tagName": {
                  "type": "constant",
                  "value": "iframe"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMG": {
          "type": "function",
          "refID": 228,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 228
                },
                "tagName": {
                  "type": "constant",
                  "value": "img"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INPUT": {
          "type": "function",
          "refID": 230,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 230
                },
                "tagName": {
                  "type": "constant",
                  "value": "input"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INS": {
          "type": "function",
          "refID": 232,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 232
                },
                "tagName": {
                  "type": "constant",
                  "value": "ins"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ISINDEX": {
          "type": "function",
          "refID": 234,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 234
                },
                "tagName": {
                  "type": "constant",
                  "value": "isindex"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KBD": {
          "type": "function",
          "refID": 236,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 236
                },
                "tagName": {
                  "type": "constant",
                  "value": "kbd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KEYGEN": {
          "type": "function",
          "refID": 238,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 238
                },
                "tagName": {
                  "type": "constant",
                  "value": "keygen"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LABEL": {
          "type": "function",
          "refID": 240,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 240
                },
                "tagName": {
                  "type": "constant",
                  "value": "label"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LEGEND": {
          "type": "function",
          "refID": 242,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 242
                },
                "tagName": {
                  "type": "constant",
                  "value": "legend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LI": {
          "type": "function",
          "refID": 244,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 244
                },
                "tagName": {
                  "type": "constant",
                  "value": "li"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINK": {
          "type": "function",
          "refID": 246,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 246
                },
                "tagName": {
                  "type": "constant",
                  "value": "link"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAIN": {
          "type": "function",
          "refID": 248,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 248
                },
                "tagName": {
                  "type": "constant",
                  "value": "main"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAP": {
          "type": "function",
          "refID": 250,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 250
                },
                "tagName": {
                  "type": "constant",
                  "value": "map"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARK": {
          "type": "function",
          "refID": 252,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 252
                },
                "tagName": {
                  "type": "constant",
                  "value": "mark"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MENU": {
          "type": "function",
          "refID": 254,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 254
                },
                "tagName": {
                  "type": "constant",
                  "value": "menu"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "META": {
          "type": "function",
          "refID": 256,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 256
                },
                "tagName": {
                  "type": "constant",
                  "value": "meta"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METER": {
          "type": "function",
          "refID": 258,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 258
                },
                "tagName": {
                  "type": "constant",
                  "value": "meter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NAV": {
          "type": "function",
          "refID": 260,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 260
                },
                "tagName": {
                  "type": "constant",
                  "value": "nav"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOFRAMES": {
          "type": "function",
          "refID": 262,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 262
                },
                "tagName": {
                  "type": "constant",
                  "value": "noframes"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOSCRIPT": {
          "type": "function",
          "refID": 264,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 264
                },
                "tagName": {
                  "type": "constant",
                  "value": "noscript"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OBJECT": {
          "type": "function",
          "refID": 266,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 266
                },
                "tagName": {
                  "type": "constant",
                  "value": "object"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OL": {
          "type": "function",
          "refID": 268,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 268
                },
                "tagName": {
                  "type": "constant",
                  "value": "ol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTGROUP": {
          "type": "function",
          "refID": 270,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 270
                },
                "tagName": {
                  "type": "constant",
                  "value": "optgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTION": {
          "type": "function",
          "refID": 272,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 272
                },
                "tagName": {
                  "type": "constant",
                  "value": "option"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OUTPUT": {
          "type": "function",
          "refID": 274,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 274
                },
                "tagName": {
                  "type": "constant",
                  "value": "output"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "P": {
          "type": "function",
          "refID": 276,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 276
                },
                "tagName": {
                  "type": "constant",
                  "value": "p"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PARAM": {
          "type": "function",
          "refID": 278,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 278
                },
                "tagName": {
                  "type": "constant",
                  "value": "param"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PRE": {
          "type": "function",
          "refID": 280,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 280
                },
                "tagName": {
                  "type": "constant",
                  "value": "pre"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PROGRESS": {
          "type": "function",
          "refID": 282,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 282
                },
                "tagName": {
                  "type": "constant",
                  "value": "progress"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Q": {
          "type": "function",
          "refID": 284,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 284
                },
                "tagName": {
                  "type": "constant",
                  "value": "q"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RP": {
          "type": "function",
          "refID": 286,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 286
                },
                "tagName": {
                  "type": "constant",
                  "value": "rp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RT": {
          "type": "function",
          "refID": 288,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 288
                },
                "tagName": {
                  "type": "constant",
                  "value": "rt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RUBY": {
          "type": "function",
          "refID": 290,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 290
                },
                "tagName": {
                  "type": "constant",
                  "value": "ruby"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "S": {
          "type": "function",
          "refID": 292,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 292
                },
                "tagName": {
                  "type": "constant",
                  "value": "s"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SAMP": {
          "type": "function",
          "refID": 294,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 294
                },
                "tagName": {
                  "type": "constant",
                  "value": "samp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SCRIPT": {
          "type": "function",
          "refID": 296,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 296
                },
                "tagName": {
                  "type": "constant",
                  "value": "script"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SECTION": {
          "type": "function",
          "refID": 298,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 298
                },
                "tagName": {
                  "type": "constant",
                  "value": "section"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SELECT": {
          "type": "function",
          "refID": 300,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 300
                },
                "tagName": {
                  "type": "constant",
                  "value": "select"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SMALL": {
          "type": "function",
          "refID": 302,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 302
                },
                "tagName": {
                  "type": "constant",
                  "value": "small"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SOURCE": {
          "type": "function",
          "refID": 304,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 304
                },
                "tagName": {
                  "type": "constant",
                  "value": "source"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SPAN": {
          "type": "function",
          "refID": 306,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 306
                },
                "tagName": {
                  "type": "constant",
                  "value": "span"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRIKE": {
          "type": "function",
          "refID": 308,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 308
                },
                "tagName": {
                  "type": "constant",
                  "value": "strike"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRONG": {
          "type": "function",
          "refID": 310,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 310
                },
                "tagName": {
                  "type": "constant",
                  "value": "strong"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STYLE": {
          "type": "function",
          "refID": 312,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 312
                },
                "tagName": {
                  "type": "constant",
                  "value": "style"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUB": {
          "type": "function",
          "refID": 314,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 314
                },
                "tagName": {
                  "type": "constant",
                  "value": "sub"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUMMARY": {
          "type": "function",
          "refID": 316,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 316
                },
                "tagName": {
                  "type": "constant",
                  "value": "summary"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUP": {
          "type": "function",
          "refID": 318,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 318
                },
                "tagName": {
                  "type": "constant",
                  "value": "sup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TABLE": {
          "type": "function",
          "refID": 320,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 320
                },
                "tagName": {
                  "type": "constant",
                  "value": "table"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TBODY": {
          "type": "function",
          "refID": 322,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 322
                },
                "tagName": {
                  "type": "constant",
                  "value": "tbody"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TD": {
          "type": "function",
          "refID": 324,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 324
                },
                "tagName": {
                  "type": "constant",
                  "value": "td"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTAREA": {
          "type": "function",
          "refID": 326,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 326
                },
                "tagName": {
                  "type": "constant",
                  "value": "textarea"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TFOOT": {
          "type": "function",
          "refID": 328,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 328
                },
                "tagName": {
                  "type": "constant",
                  "value": "tfoot"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TH": {
          "type": "function",
          "refID": 330,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 330
                },
                "tagName": {
                  "type": "constant",
                  "value": "th"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "THEAD": {
          "type": "function",
          "refID": 332,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 332
                },
                "tagName": {
                  "type": "constant",
                  "value": "thead"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TIME": {
          "type": "function",
          "refID": 334,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 334
                },
                "tagName": {
                  "type": "constant",
                  "value": "time"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TITLE": {
          "type": "function",
          "refID": 336,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 336
                },
                "tagName": {
                  "type": "constant",
                  "value": "title"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TR": {
          "type": "function",
          "refID": 338,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 338
                },
                "tagName": {
                  "type": "constant",
                  "value": "tr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TRACK": {
          "type": "function",
          "refID": 340,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 340
                },
                "tagName": {
                  "type": "constant",
                  "value": "track"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TT": {
          "type": "function",
          "refID": 342,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 342
                },
                "tagName": {
                  "type": "constant",
                  "value": "tt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "U": {
          "type": "function",
          "refID": 344,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 344
                },
                "tagName": {
                  "type": "constant",
                  "value": "u"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "UL": {
          "type": "function",
          "refID": 346,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 346
                },
                "tagName": {
                  "type": "constant",
                  "value": "ul"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VAR": {
          "type": "function",
          "refID": 348,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 348
                },
                "tagName": {
                  "type": "constant",
                  "value": "var"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIDEO": {
          "type": "function",
          "refID": 350,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 350
                },
                "tagName": {
                  "type": "constant",
                  "value": "video"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "WBR": {
          "type": "function",
          "refID": 352,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 352
                },
                "tagName": {
                  "type": "constant",
                  "value": "wbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPH": {
          "type": "function",
          "refID": 354,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 354
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHDEF": {
          "type": "function",
          "refID": 356,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 356
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphDef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHITEM": {
          "type": "function",
          "refID": 358,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 358
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphItem"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATE": {
          "type": "function",
          "refID": 360,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 360
                },
                "tagName": {
                  "type": "constant",
                  "value": "animate"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATECOLOR": {
          "type": "function",
          "refID": 362,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 362
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateColor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATEMOTION": {
          "type": "function",
          "refID": 364,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 364
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateMotion"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATETRANSFORM": {
          "type": "function",
          "refID": 366,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 366
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateTransform"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CIRCLE": {
          "type": "function",
          "refID": 368,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 368
                },
                "tagName": {
                  "type": "constant",
                  "value": "circle"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CLIPPATH": {
          "type": "function",
          "refID": 370,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 370
                },
                "tagName": {
                  "type": "constant",
                  "value": "clipPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLOR_PROFILE": {
          "type": "function",
          "refID": 372,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 372
                },
                "tagName": {
                  "type": "constant",
                  "value": "color-profile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CURSOR": {
          "type": "function",
          "refID": 374,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 374
                },
                "tagName": {
                  "type": "constant",
                  "value": "cursor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEFS": {
          "type": "function",
          "refID": 376,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 376
                },
                "tagName": {
                  "type": "constant",
                  "value": "defs"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DESC": {
          "type": "function",
          "refID": 378,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 378
                },
                "tagName": {
                  "type": "constant",
                  "value": "desc"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ELLIPSE": {
          "type": "function",
          "refID": 380,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 380
                },
                "tagName": {
                  "type": "constant",
                  "value": "ellipse"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEBLEND": {
          "type": "function",
          "refID": 382,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 382
                },
                "tagName": {
                  "type": "constant",
                  "value": "feBlend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOLORMATRIX": {
          "type": "function",
          "refID": 384,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 384
                },
                "tagName": {
                  "type": "constant",
                  "value": "feColorMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPONENTTRANSFER": {
          "type": "function",
          "refID": 386,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 386
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComponentTransfer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPOSITE": {
          "type": "function",
          "refID": 388,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 388
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComposite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECONVOLVEMATRIX": {
          "type": "function",
          "refID": 390,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 390
                },
                "tagName": {
                  "type": "constant",
                  "value": "feConvolveMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDIFFUSELIGHTING": {
          "type": "function",
          "refID": 392,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 392
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDiffuseLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISPLACEMENTMAP": {
          "type": "function",
          "refID": 394,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 394
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDisplacementMap"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISTANTLIGHT": {
          "type": "function",
          "refID": 396,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 396
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDistantLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFLOOD": {
          "type": "function",
          "refID": 398,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 398
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFlood"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCA": {
          "type": "function",
          "refID": 400,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 400
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncA"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCB": {
          "type": "function",
          "refID": 402,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 402
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncB"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCG": {
          "type": "function",
          "refID": 404,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 404
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncG"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCR": {
          "type": "function",
          "refID": 406,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 406
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncR"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEGAUSSIANBLUR": {
          "type": "function",
          "refID": 408,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 408
                },
                "tagName": {
                  "type": "constant",
                  "value": "feGaussianBlur"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEIMAGE": {
          "type": "function",
          "refID": 410,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 410
                },
                "tagName": {
                  "type": "constant",
                  "value": "feImage"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGE": {
          "type": "function",
          "refID": 412,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 412
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMerge"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGENODE": {
          "type": "function",
          "refID": 414,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 414
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMergeNode"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMORPHOLOGY": {
          "type": "function",
          "refID": 416,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 416
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMorphology"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEOFFSET": {
          "type": "function",
          "refID": 418,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 418
                },
                "tagName": {
                  "type": "constant",
                  "value": "feOffset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEPOINTLIGHT": {
          "type": "function",
          "refID": 420,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 420
                },
                "tagName": {
                  "type": "constant",
                  "value": "fePointLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPECULARLIGHTING": {
          "type": "function",
          "refID": 422,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 422
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpecularLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPOTLIGHT": {
          "type": "function",
          "refID": 424,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 424
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpotLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETILE": {
          "type": "function",
          "refID": 426,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 426
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETURBULENCE": {
          "type": "function",
          "refID": 428,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 428
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTurbulence"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FILTER": {
          "type": "function",
          "refID": 430,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 430
                },
                "tagName": {
                  "type": "constant",
                  "value": "filter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE": {
          "type": "function",
          "refID": 432,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 432
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_FORMAT": {
          "type": "function",
          "refID": 434,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 434
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-format"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_NAME": {
          "type": "function",
          "refID": 436,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 436
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-name"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_SRC": {
          "type": "function",
          "refID": 438,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 438
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-src"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_URI": {
          "type": "function",
          "refID": 440,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 440
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-uri"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOREIGNOBJECT": {
          "type": "function",
          "refID": 442,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 442
                },
                "tagName": {
                  "type": "constant",
                  "value": "foreignObject"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "G": {
          "type": "function",
          "refID": 444,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 444
                },
                "tagName": {
                  "type": "constant",
                  "value": "g"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPH": {
          "type": "function",
          "refID": 446,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 446
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPHREF": {
          "type": "function",
          "refID": 448,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 448
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyphRef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HKERN": {
          "type": "function",
          "refID": 450,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 450
                },
                "tagName": {
                  "type": "constant",
                  "value": "hkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMAGE": {
          "type": "function",
          "refID": 452,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 452
                },
                "tagName": {
                  "type": "constant",
                  "value": "image"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINE": {
          "type": "function",
          "refID": 454,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 454
                },
                "tagName": {
                  "type": "constant",
                  "value": "line"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINEARGRADIENT": {
          "type": "function",
          "refID": 456,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 456
                },
                "tagName": {
                  "type": "constant",
                  "value": "linearGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARKER": {
          "type": "function",
          "refID": 458,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 458
                },
                "tagName": {
                  "type": "constant",
                  "value": "marker"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MASK": {
          "type": "function",
          "refID": 460,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 460
                },
                "tagName": {
                  "type": "constant",
                  "value": "mask"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METADATA": {
          "type": "function",
          "refID": 462,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 462
                },
                "tagName": {
                  "type": "constant",
                  "value": "metadata"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MISSING_GLYPH": {
          "type": "function",
          "refID": 464,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 464
                },
                "tagName": {
                  "type": "constant",
                  "value": "missing-glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATH": {
          "type": "function",
          "refID": 466,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 466
                },
                "tagName": {
                  "type": "constant",
                  "value": "path"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATTERN": {
          "type": "function",
          "refID": 468,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 468
                },
                "tagName": {
                  "type": "constant",
                  "value": "pattern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYGON": {
          "type": "function",
          "refID": 470,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 470
                },
                "tagName": {
                  "type": "constant",
                  "value": "polygon"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYLINE": {
          "type": "function",
          "refID": 472,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 472
                },
                "tagName": {
                  "type": "constant",
                  "value": "polyline"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RADIALGRADIENT": {
          "type": "function",
          "refID": 474,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 474
                },
                "tagName": {
                  "type": "constant",
                  "value": "radialGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RECT": {
          "type": "function",
          "refID": 476,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 476
                },
                "tagName": {
                  "type": "constant",
                  "value": "rect"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SET": {
          "type": "function",
          "refID": 478,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 478
                },
                "tagName": {
                  "type": "constant",
                  "value": "set"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STOP": {
          "type": "function",
          "refID": 480,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 480
                },
                "tagName": {
                  "type": "constant",
                  "value": "stop"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SVG": {
          "type": "function",
          "refID": 482,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 482
                },
                "tagName": {
                  "type": "constant",
                  "value": "svg"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SWITCH": {
          "type": "function",
          "refID": 484,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 484
                },
                "tagName": {
                  "type": "constant",
                  "value": "switch"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SYMBOL": {
          "type": "function",
          "refID": 486,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 486
                },
                "tagName": {
                  "type": "constant",
                  "value": "symbol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXT": {
          "type": "function",
          "refID": 488,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 488
                },
                "tagName": {
                  "type": "constant",
                  "value": "text"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTPATH": {
          "type": "function",
          "refID": 490,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 490
                },
                "tagName": {
                  "type": "constant",
                  "value": "textPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TREF": {
          "type": "function",
          "refID": 492,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 492
                },
                "tagName": {
                  "type": "constant",
                  "value": "tref"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TSPAN": {
          "type": "function",
          "refID": 494,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 494
                },
                "tagName": {
                  "type": "constant",
                  "value": "tspan"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "USE": {
          "type": "function",
          "refID": 496,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 496
                },
                "tagName": {
                  "type": "constant",
                  "value": "use"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIEW": {
          "type": "function",
          "refID": 498,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 498
                },
                "tagName": {
                  "type": "constant",
                  "value": "view"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VKERN": {
          "type": "function",
          "refID": 500,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 500
                },
                "tagName": {
                  "type": "constant",
                  "value": "vkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CharRef": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 503
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 503
                }
              }
            }
          }
        },
        "Comment": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 506
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 506
                }
              }
            }
          }
        },
        "Raw": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 509
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 509
                }
              }
            }
          }
        },
        "isArray": {
          "type": "function"
        },
        "isConstructedObject": {
          "type": "function"
        },
        "isNully": {
          "type": "function"
        },
        "isValidAttributeName": {
          "type": "function"
        },
        "flattenAttributes": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "TEXTMODE": {
          "type": "object",
          "members": {
            "STRING": {
              "type": "constant",
              "value": 1
            },
            "RCDATA": {
              "type": "constant",
              "value": 2
            },
            "ATTRIBUTE": {
              "type": "constant",
              "value": 3
            }
          }
        },
        "toText": {
          "type": "function"
        }
      }
    }
  },
  "html-tools": {
    "HTMLTools": {
      "type": "object",
      "members": {
        "Parse": {
          "type": "object",
          "members": {
            "getCharacterReference": {
              "type": "function"
            },
            "getComment": {
              "type": "function"
            },
            "getDoctype": {
              "type": "function"
            },
            "getHTMLToken": {
              "type": "function"
            },
            "getTagToken": {
              "type": "function"
            },
            "getContent": {
              "type": "function"
            },
            "getRCData": {
              "type": "function"
            }
          }
        },
        "asciiLowerCase": {
          "type": "function"
        },
        "properCaseTagName": {
          "type": "function"
        },
        "properCaseAttributeName": {
          "type": "function"
        },
        "Scanner": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rest": {
                  "type": "function"
                },
                "isEOF": {
                  "type": "function"
                },
                "fatal": {
                  "type": "function"
                },
                "peek": {
                  "type": "function"
                }
              }
            }
          }
        },
        "TEMPLATE_TAG_POSITION": {
          "type": "object",
          "members": {
            "ELEMENT": {
              "type": "constant",
              "value": 1
            },
            "IN_START_TAG": {
              "type": "constant",
              "value": 2
            },
            "IN_ATTRIBUTE": {
              "type": "constant",
              "value": 3
            },
            "IN_RCDATA": {
              "type": "constant",
              "value": 4
            },
            "IN_RAWTEXT": {
              "type": "constant",
              "value": 5
            }
          }
        },
        "TemplateTag": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "HTMLTools.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "parseFragment": {
          "type": "function"
        },
        "codePointToString": {
          "type": "function"
        }
      }
    }
  },
  "blaze-tools": {
    "BlazeTools": {
      "type": "object",
      "members": {
        "parseNumber": {
          "type": "function"
        },
        "parseIdentifierName": {
          "type": "function"
        },
        "parseStringLiteral": {
          "type": "function"
        },
        "EmitCode": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJSLiteral": {
          "type": "function"
        },
        "toObjectLiteralKey": {
          "type": "function"
        },
        "ToJSVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "type": "function"
            },
            "def": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "generateCall": {
                  "type": "function"
                },
                "generateAttrsDictionary": {
                  "type": "function"
                },
                "visit": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJS": {
          "type": "function"
        }
      }
    }
  },
  "spacebars-compiler": {
    "SpacebarsCompiler": {
      "type": "object",
      "members": {
        "TemplateTag": {
          "type": "function",
          "members": {
            "parse": {
              "type": "function"
            },
            "peek": {
              "type": "function"
            },
            "parseCompleteTag": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "SpacebarsCompiler.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "optimize": {
          "type": "function"
        },
        "CodeGen": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "codeGenTemplateTag": {
                  "type": "function"
                },
                "codeGenPath": {
                  "type": "function"
                },
                "codeGenArgValue": {
                  "type": "function"
                },
                "codeGenMustache": {
                  "type": "function"
                },
                "codeGenMustacheArgs": {
                  "type": "function"
                },
                "codeGenBlock": {
                  "type": "function"
                },
                "codeGenInclusionDataFunc": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isReservedName": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "compile": {
          "type": "function"
        },
        "codeGen": {
          "type": "function"
        }
      }
    }
  },
  "jquery": {},
  "id-map": {
    "IdMap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ordered-dict": {
    "OrderedDict": {
      "type": "function",
      "members": {
        "BREAK": {
          "type": "object"
        },
        "prototype": {
          "type": "object",
          "members": {
            "empty": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "putBefore": {
              "type": "function"
            },
            "append": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "first": {
              "type": "function"
            },
            "firstValue": {
              "type": "function"
            },
            "last": {
              "type": "function"
            },
            "lastValue": {
              "type": "function"
            },
            "prev": {
              "type": "function"
            },
            "next": {
              "type": "function"
            },
            "moveBefore": {
              "type": "function"
            },
            "indexOf": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "random": {
    "Random": {
      "type": "object",
      "members": {
        "createWithSeeds": {
          "type": "function"
        },
        "fraction": {
          "type": "function"
        },
        "hexString": {
          "type": "function"
        },
        "id": {
          "type": "function"
        },
        "secret": {
          "type": "function"
        },
        "choice": {
          "type": "function"
        }
      }
    }
  },
  "geojson-utils": {
    "GeoJSON": {
      "type": "object",
      "members": {
        "lineStringsIntersect": {
          "type": "function"
        },
        "pointInBoundingBox": {
          "type": "function"
        },
        "pointInPolygon": {
          "type": "function"
        },
        "numberToRadius": {
          "type": "function"
        },
        "numberToDegree": {
          "type": "function"
        },
        "drawCircle": {
          "type": "function"
        },
        "rectangleCentroid": {
          "type": "function"
        },
        "pointDistance": {
          "type": "function"
        },
        "geometryWithinRadius": {
          "type": "function"
        },
        "area": {
          "type": "function"
        },
        "centroid": {
          "type": "function"
        },
        "simplify": {
          "type": "function"
        },
        "destinationPoint": {
          "type": "function"
        }
      }
    }
  },
  "minimongo": {
    "LocalCollection": {
      "type": "function",
      "members": {
        "Cursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rewind": {
                  "type": "function"
                },
                "forEach": {
                  "type": "function"
                },
                "getTransform": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "fetch": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "observe": {
                  "type": "function"
                },
                "observeChanges": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObserveHandle": {
          "type": "function"
        },
        "wrapTransform": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "saveOriginals": {
              "type": "function"
            },
            "retrieveOriginals": {
              "type": "function"
            },
            "pauseObservers": {
              "type": "function"
            },
            "resumeObservers": {
              "type": "function"
            }
          }
        }
      }
    },
    "Minimongo": {
      "type": "object",
      "members": {
        "Matcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "documentMatches": {
                  "type": "function"
                },
                "hasGeoQuery": {
                  "type": "function"
                },
                "hasWhere": {
                  "type": "function"
                },
                "isSimple": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "canBecomeTrueByModifier": {
                  "type": "function"
                },
                "matchingDocument": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Sorter": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getComparator": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "MinimongoTest": {
      "type": "object",
      "members": {
        "makeLookupFunction": {
          "type": "function"
        }
      }
    }
  },
  "observe-sequence": {
    "ObserveSequence": {
      "type": "object",
      "members": {
        "observe": {
          "type": "function"
        },
        "fetch": {
          "type": "function"
        }
      }
    }
  },
  "reactive-var": {
    "ReactiveVar": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "toString": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "blaze": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "templating": {},
  "spacebars": {
    "Spacebars": {
      "type": "object",
      "members": {
        "include": {
          "type": "function"
        },
        "mustacheImpl": {
          "type": "function"
        },
        "mustache": {
          "type": "function"
        },
        "attrMustache": {
          "type": "function"
        },
        "dataMustache": {
          "type": "function"
        },
        "makeRaw": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "kw": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        },
        "dot": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "TemplateWith": {
          "type": "function"
        }
      }
    }
  },
  "ui": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 31
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 47
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 31
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 47
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "boilerplate-generator": {
    "Boilerplate": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "toHTML": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "webapp-hashing": {
    "WebAppHashing": {
      "type": "object",
      "members": {
        "calculateClientHash": {
          "type": "function"
        }
      }
    }
  },
  "webapp": {
    "WebApp": {
      "type": "object",
      "members": {
        "defaultArch": {
          "type": "constant",
          "value": "web.browser"
        },
        "clientPrograms": {
          "type": "object",
          "members": {
            "web.browser": {
              "type": "object",
              "members": {
                "manifest": {
                  "type": "array"
                },
                "version": {
                  "type": "constant",
                  "value": "0b435aa5cd786050ccc6690b6e821b582f4e62b6"
                },
                "PUBLIC_SETTINGS": {
                  "type": "undefined"
                }
              }
            }
          }
        },
        "categorizeRequest": {
          "type": "function"
        },
        "addHtmlAttributeHook": {
          "type": "function"
        },
        "connectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "type": "function",
              "refID": 9
            },
            "handle": {
              "type": "function",
              "refID": 11
            },
            "listen": {
              "type": "function",
              "refID": 13
            },
            "setMaxListeners": {
              "type": "function",
              "refID": 15
            },
            "emit": {
              "type": "function",
              "refID": 17
            },
            "addListener": {
              "type": "function",
              "refID": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "type": "function",
              "refID": 21
            },
            "removeListener": {
              "type": "function",
              "refID": 23
            },
            "removeAllListeners": {
              "type": "function",
              "refID": 25
            },
            "listeners": {
              "type": "function",
              "refID": 27
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "rawConnectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "ref": 9
            },
            "handle": {
              "ref": 11
            },
            "listen": {
              "ref": 13
            },
            "setMaxListeners": {
              "ref": 15
            },
            "emit": {
              "ref": 17
            },
            "addListener": {
              "ref": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "ref": 21
            },
            "removeListener": {
              "ref": 23
            },
            "removeAllListeners": {
              "ref": 25
            },
            "listeners": {
              "ref": 27
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "httpServer": {
          "type": "object",
          "members": {
            "domain": {
              "type": "null",
              "value": null
            },
            "connections": {
              "type": "constant",
              "value": 8
            },
            "timeout": {
              "type": "constant",
              "value": 5000
            },
            "setTimeout": {
              "type": "function"
            },
            "listen": {
              "type": "function"
            },
            "address": {
              "type": "function"
            },
            "getConnections": {
              "type": "function"
            },
            "close": {
              "type": "function"
            },
            "listenFD": {
              "type": "function"
            },
            "ref": {
              "type": "function"
            },
            "unref": {
              "type": "function"
            },
            "setMaxListeners": {
              "ref": 15
            },
            "emit": {
              "ref": 17
            },
            "addListener": {
              "ref": 19
            },
            "on": {
              "ref": 19
            },
            "once": {
              "ref": 21
            },
            "removeListener": {
              "ref": 23
            },
            "removeAllListeners": {
              "ref": 25
            },
            "listeners": {
              "ref": 27
            }
          }
        },
        "suppressConnectErrors": {
          "type": "function"
        },
        "onListening": {
          "type": "function"
        },
        "clientHash": {
          "type": "function"
        },
        "calculateClientHashRefreshable": {
          "type": "function"
        },
        "calculateClientHashNonRefreshable": {
          "type": "function"
        },
        "calculateClientHashCordova": {
          "type": "function"
        }
      }
    },
    "main": {
      "type": "function"
    },
    "WebAppInternals": {
      "type": "object",
      "members": {
        "identifyBrowser": {
          "type": "function"
        },
        "generateBoilerplateInstance": {
          "type": "function"
        },
        "staticFilesMiddleware": {
          "type": "function"
        },
        "bindToProxy": {
          "type": "function"
        },
        "addRoute": {
          "type": "function"
        },
        "reloadClientPrograms": {
          "type": "function"
        },
        "generateBoilerplate": {
          "type": "function"
        },
        "staticFiles": {
          "type": "object",
          "members": {
            "/packages/underscore.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/underscore.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/underscore.js.map"
                }
              }
            },
            "/packages/meteor.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/meteor.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/81e2f06cff198adaa81b3bc09fc4f3728b7370ec.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/81e2f06cff198adaa81b3bc09fc4f3728b7370ec.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/meteor.js.map"
                }
              }
            },
            "/packages/json.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/json.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e22856eae714c681199eabc5c0710b904b125554.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e22856eae714c681199eabc5c0710b904b125554.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/json.js.map"
                }
              }
            },
            "/packages/base64.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/base64.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1a63019243b73298e2964e6d4680f25bca657726.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/1a63019243b73298e2964e6d4680f25bca657726.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/base64.js.map"
                }
              }
            },
            "/packages/ejson.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/ejson.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/ejson.js.map"
                }
              }
            },
            "/packages/logging.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/logging.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/07e201b648f16be8435a4f666156995eeda0c750.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/07e201b648f16be8435a4f666156995eeda0c750.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/logging.js.map"
                }
              }
            },
            "/packages/reload.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/reload.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/reload.js.map"
                }
              }
            },
            "/packages/tracker.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/tracker.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/517c8fe8ed6408951a30941e64a5383a7174bcfa.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/517c8fe8ed6408951a30941e64a5383a7174bcfa.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/tracker.js.map"
                }
              }
            },
            "/packages/random.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/random.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/random.js.map"
                }
              }
            },
            "/packages/retry.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/retry.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/retry.js.map"
                }
              }
            },
            "/packages/check.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/check.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/ac81167b8513b85b926c167bba423981b0c4cf9c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/ac81167b8513b85b926c167bba423981b0c4cf9c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/check.js.map"
                }
              }
            },
            "/packages/id-map.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/id-map.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/id-map.js.map"
                }
              }
            },
            "/packages/ordered-dict.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/ordered-dict.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/ordered-dict.js.map"
                }
              }
            },
            "/packages/geojson-utils.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/geojson-utils.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/geojson-utils.js.map"
                }
              }
            },
            "/packages/minimongo.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/minimongo.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e8806aa7782b729b2517ebc0cd10b321667f1427.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e8806aa7782b729b2517ebc0cd10b321667f1427.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/minimongo.js.map"
                }
              }
            },
            "/packages/ddp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/ddp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/41b62dcceb3ce0de6ca79c6aed088cccde6a44d8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/41b62dcceb3ce0de6ca79c6aed088cccde6a44d8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/ddp.js.map"
                }
              }
            },
            "/packages/follower-livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/follower-livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/follower-livedata.js.map"
                }
              }
            },
            "/packages/application-configuration.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/application-configuration.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/application-configuration.js.map"
                }
              }
            },
            "/packages/insecure.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/insecure.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/3dc9d4a2dad55999b5b15a447d57f3d5fb66b290.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/3dc9d4a2dad55999b5b15a447d57f3d5fb66b290.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/insecure.js.map"
                }
              }
            },
            "/packages/mongo.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/mongo.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/052f30e968644b2b39a96605ffee73a7684ff37b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/052f30e968644b2b39a96605ffee73a7684ff37b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/mongo.js.map"
                }
              }
            },
            "/packages/autoupdate.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/autoupdate.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9a5ea03bf057815385bf569c7acc2c285c005491.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9a5ea03bf057815385bf569c7acc2c285c005491.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/autoupdate.js.map"
                }
              }
            },
            "/packages/meteor-platform.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/meteor-platform.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/meteor-platform.js.map"
                }
              }
            },
            "/packages/less.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/less.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/less.js.map"
                }
              }
            },
            "/packages/jquery.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/jquery.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/dd8bac56f8fd3666d433d2285ae01e52597cc51a.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/dd8bac56f8fd3666d433d2285ae01e52597cc51a.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/jquery.js.map"
                }
              }
            },
            "/packages/mrt_bootstrap-3.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/mrt_bootstrap-3.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/cdd66806fce55191bbb255a2bd50e366b4d2992e.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/cdd66806fce55191bbb255a2bd50e366b4d2992e.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/mrt_bootstrap-3.js.map"
                }
              }
            },
            "/packages/deps.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/deps.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/deps.js.map"
                }
              }
            },
            "/packages/htmljs.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/htmljs.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/567eb96d5d22631c03d6aca6afa4c42f0d1295f2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/567eb96d5d22631c03d6aca6afa4c42f0d1295f2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/htmljs.js.map"
                }
              }
            },
            "/packages/observe-sequence.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/observe-sequence.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2fd807ea171ead273b9e6458607cb226012d9240.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/2fd807ea171ead273b9e6458607cb226012d9240.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/observe-sequence.js.map"
                }
              }
            },
            "/packages/reactive-var.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/reactive-var.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/reactive-var.js.map"
                }
              }
            },
            "/packages/blaze.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/blaze.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/efa68f65e67544b5a05509804bf97e2c91ce75eb.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/efa68f65e67544b5a05509804bf97e2c91ce75eb.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/blaze.js.map"
                }
              }
            },
            "/packages/ui.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/ui.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/ui.js.map"
                }
              }
            },
            "/packages/templating.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/templating.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/599ba307216da826d8b335332ebcc9a497a369a0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/599ba307216da826d8b335332ebcc9a497a369a0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/templating.js.map"
                }
              }
            },
            "/packages/iron_core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/d966a1f70c94792fd94c8a155bdbef9bec5e0047.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/d966a1f70c94792fd94c8a155bdbef9bec5e0047.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_core.js.map"
                }
              }
            },
            "/packages/iron_dynamic-template.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_dynamic-template.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/d425554c9847e4a80567f8ca55719cd6ae3f2722.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/d425554c9847e4a80567f8ca55719cd6ae3f2722.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_dynamic-template.js.map"
                }
              }
            },
            "/packages/iron_layout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_layout.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/4e65c46acdaf0ce6a8b1a479d7b9d0b5c0902062.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/4e65c46acdaf0ce6a8b1a479d7b9d0b5c0902062.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_layout.js.map"
                }
              }
            },
            "/packages/iron_url.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_url.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6979e41649a22dcf609df30fc533e36037c7ae58.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6979e41649a22dcf609df30fc533e36037c7ae58.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_url.js.map"
                }
              }
            },
            "/packages/iron_middleware-stack.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_middleware-stack.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0e0f6983a838a6516556b08e62894f89720e2c44.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0e0f6983a838a6516556b08e62894f89720e2c44.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_middleware-stack.js.map"
                }
              }
            },
            "/packages/iron_location.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_location.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/ca4f0f6672edbfb6cafab6e5c024208d9364eac9.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/ca4f0f6672edbfb6cafab6e5c024208d9364eac9.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_location.js.map"
                }
              }
            },
            "/packages/reactive-dict.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/reactive-dict.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/reactive-dict.js.map"
                }
              }
            },
            "/packages/iron_controller.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_controller.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/b02790701804563eafedb2e68c602154983ade06.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/b02790701804563eafedb2e68c602154983ade06.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_controller.js.map"
                }
              }
            },
            "/packages/iron_router.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_router.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/a427868585af16bb88b7c9996b2449aebb8dbf51.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/a427868585af16bb88b7c9996b2449aebb8dbf51.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/iron_router.js.map"
                }
              }
            },
            "/packages/coffeescript.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/coffeescript.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/coffeescript.js.map"
                }
              }
            },
            "/packages/digilord_faker.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/digilord_faker.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9b288be92cf8355bb1480bf6ff429abce79f492f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9b288be92cf8355bb1480bf6ff429abce79f492f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/digilord_faker.js.map"
                }
              }
            },
            "/packages/dburles_mongo-collection-instances.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/dburles_mongo-collection-instances.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/f78f3ee4031ef50a61202ba52006142409950861.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/f78f3ee4031ef50a61202ba52006142409950861.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/dburles_mongo-collection-instances.js.map"
                }
              }
            },
            "/packages/msavin_mongol.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/msavin_mongol.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/8ff8b4e0de38b10f92e47745211ba1a97087fb8f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/8ff8b4e0de38b10f92e47745211ba1a97087fb8f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/msavin_mongol.js.map"
                }
              }
            },
            "/packages/meteorhacks_meteorx.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/meteorhacks_meteorx.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/afd5ff95b1c1492f60049925f1f827e2b5817bbb.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/afd5ff95b1c1492f60049925f1f827e2b5817bbb.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/meteorhacks_meteorx.js.map"
                }
              }
            },
            "/packages/localstorage.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/localstorage.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/localstorage.js.map"
                }
              }
            },
            "/packages/meteorhacks_kadira.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/meteorhacks_kadira.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/59e442ea741bf86014d559bad7a579ed2f76d294.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/59e442ea741bf86014d559bad7a579ed2f76d294.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/meteorhacks_kadira.js.map"
                }
              }
            },
            "/packages/practicalmeteor_chai.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/practicalmeteor_chai.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7fbbbec9a13f4adf082b394c5ddd7230d84afc48.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7fbbbec9a13f4adf082b394c5ddd7230d84afc48.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/practicalmeteor_chai.js.map"
                }
              }
            },
            "/packages/practicalmeteor_loglevel.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/practicalmeteor_loglevel.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9185331dfa11fd235edfbef93838d4ca3244d638.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9185331dfa11fd235edfbef93838d4ca3244d638.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/practicalmeteor_loglevel.js.map"
                }
              }
            },
            "/packages/velocity_core.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_core.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/cecf2443254038195518d507d5fe0ecdc5dce435.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/cecf2443254038195518d507d5fe0ecdc5dce435.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_core.js.map"
                }
              }
            },
            "/packages/velocity_shim.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_shim.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/14363d085a412115605c41536e4f2867425b89d5.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/14363d085a412115605c41536e4f2867425b89d5.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_shim.js.map"
                }
              }
            },
            "/packages/sanjo_jasmine.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/sanjo_jasmine.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/6c8e0ce3908e66d0de626b7c10139a1ad3351d76.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/6c8e0ce3908e66d0de626b7c10139a1ad3351d76.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/sanjo_jasmine.js.map"
                }
              }
            },
            "/packages/amplify.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/amplify.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/amplify.js.map"
                }
              }
            },
            "/packages/velocity_html-reporter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/a615bf3410d795106d7a78c6a94379745879f7df.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/a615bf3410d795106d7a78c6a94379745879f7df.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter.js.map"
                }
              }
            },
            "/packages/cfs_standard-packages.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_standard-packages.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/19b305d60b4a8e65110bbc6cc2dbfb5143ad376f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/19b305d60b4a8e65110bbc6cc2dbfb5143ad376f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_standard-packages.js.map"
                }
              }
            },
            "/packages/cfs_base-package.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_base-package.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/593ce74653596b711ba5ca14890e8513fb3544ec.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/593ce74653596b711ba5ca14890e8513fb3544ec.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_base-package.js.map"
                }
              }
            },
            "/packages/livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/livedata.js.map"
                }
              }
            },
            "/packages/mongo-livedata.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/mongo-livedata.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e6ebca489f38b73788b494509a4f83d87fdbf6c0.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e6ebca489f38b73788b494509a4f83d87fdbf6c0.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/mongo-livedata.js.map"
                }
              }
            },
            "/packages/raix_eventemitter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/raix_eventemitter.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2698ca3a2e678f77962ebe839ad04615958a4c26.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/2698ca3a2e678f77962ebe839ad04615958a4c26.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/raix_eventemitter.js.map"
                }
              }
            },
            "/packages/cfs_storage-adapter.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_storage-adapter.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/cd74b8c12b6ea79b967099c78406ff3eb4bfbcc7.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/cd74b8c12b6ea79b967099c78406ff3eb4bfbcc7.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_storage-adapter.js.map"
                }
              }
            },
            "/packages/cfs_filesystem.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_filesystem.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9ad24a636eee4618b175d38deb943e91006788a1.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9ad24a636eee4618b175d38deb943e91006788a1.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_filesystem.js.map"
                }
              }
            },
            "/packages/webapp.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/webapp.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e1be090051b82f046484dccc2de7d747e50c7328.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e1be090051b82f046484dccc2de7d747e50c7328.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/webapp.js.map"
                }
              }
            },
            "/packages/session.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/session.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/e436deefadc999c21b6fd16e8e1ecce55c3c3a55.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/e436deefadc999c21b6fd16e8e1ecce55c3c3a55.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/session.js.map"
                }
              }
            },
            "/packages/spacebars.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/spacebars.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7f53771c84a2eafac2b561c9796dda0d8af8e7f5.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7f53771c84a2eafac2b561c9796dda0d8af8e7f5.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/spacebars.js.map"
                }
              }
            },
            "/packages/launch-screen.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/launch-screen.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/13e1092ebecdb7208762500188f1dc2dea5603e9.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/13e1092ebecdb7208762500188f1dc2dea5603e9.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/launch-screen.js.map"
                }
              }
            },
            "/packages/url.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/url.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2312d739008b2ffa52f13c77c5d6fc59c9e17d56.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/2312d739008b2ffa52f13c77c5d6fc59c9e17d56.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/url.js.map"
                }
              }
            },
            "/packages/http.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/http.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/http.js.map"
                }
              }
            },
            "/packages/cfs_data-man.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_data-man.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/a69f9a3bd18f305c48ef0bb42bbbbe2a047e4d4e.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/a69f9a3bd18f305c48ef0bb42bbbbe2a047e4d4e.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_data-man.js.map"
                }
              }
            },
            "/packages/cfs_file.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_file.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/f44220407bc5afa9d512bd07e33dcd3dde0839b9.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/f44220407bc5afa9d512bd07e33dcd3dde0839b9.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_file.js.map"
                }
              }
            },
            "/packages/cfs_tempstore.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_tempstore.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/57bd2292fb397e5bb2efc7ada35e4edc9c1452f8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/57bd2292fb397e5bb2efc7ada35e4edc9c1452f8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_tempstore.js.map"
                }
              }
            },
            "/packages/cfs_http-methods.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_http-methods.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/27ebb517f41bc4064a6fa551be12698982803678.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/27ebb517f41bc4064a6fa551be12698982803678.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_http-methods.js.map"
                }
              }
            },
            "/packages/cfs_http-publish.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_http-publish.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/145ad24eef4127acca730985e0e9bf09770582a8.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/145ad24eef4127acca730985e0e9bf09770582a8.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_http-publish.js.map"
                }
              }
            },
            "/packages/cfs_access-point.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_access-point.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/0bfe974ee453abef55cf9a71244e13121aabc0a3.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/0bfe974ee453abef55cf9a71244e13121aabc0a3.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_access-point.js.map"
                }
              }
            },
            "/packages/cfs_reactive-property.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_reactive-property.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9eae0a7e5e4347f034060de7243a83d2f30bc1aa.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9eae0a7e5e4347f034060de7243a83d2f30bc1aa.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_reactive-property.js.map"
                }
              }
            },
            "/packages/cfs_reactive-list.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_reactive-list.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/74e35a358dc54480adf3c5649328dfca33bc07f5.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/74e35a358dc54480adf3c5649328dfca33bc07f5.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_reactive-list.js.map"
                }
              }
            },
            "/packages/cfs_power-queue.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_power-queue.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/255f444fbb9de891f6e803923430c0dc1fa40e4f.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/255f444fbb9de891f6e803923430c0dc1fa40e4f.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_power-queue.js.map"
                }
              }
            },
            "/packages/cfs_upload-http.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_upload-http.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/cf37b2941c8cdbfd85cdc3948f57fed4bb429081.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/cf37b2941c8cdbfd85cdc3948f57fed4bb429081.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_upload-http.js.map"
                }
              }
            },
            "/packages/cfs_collection.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_collection.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/7a8e741d07523167d771eb4bfcb1b1da50cced7e.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/7a8e741d07523167d771eb4bfcb1b1da50cced7e.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_collection.js.map"
                }
              }
            },
            "/packages/cfs_collection-filters.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_collection-filters.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/9444f9ff1045ffe9164a412c994d38824246f7ba.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/9444f9ff1045ffe9164a412c994d38824246f7ba.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_collection-filters.js.map"
                }
              }
            },
            "/packages/cfs_worker.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_worker.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/2c2125302bc13e7d07b2ed552a61b8fde61c427d.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/2c2125302bc13e7d07b2ed552a61b8fde61c427d.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/cfs_worker.js.map"
                }
              }
            },
            "/packages/global-imports.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/global-imports.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/shared/layout/template.template.layout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/shared/layout/template.template.layout.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/shared/loading/template.template.loading.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/shared/loading/template.template.loading.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/shared/notFound/template.template.notFound.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/shared/notFound/template.template.notFound.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/hello/template.template.hello.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/hello/template.template.hello.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/home/template.template.home.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/home/template.template.home.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/navbar/template.template.navbar.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/navbar/template.template.navbar.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/rooms/template.template.rooms.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/rooms/template.template.rooms.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/rooms/template.template.rooms.new.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/rooms/template.template.rooms.new.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/search/template.template.search.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/search/template.template.search.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/shared/layout/layout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/shared/layout/layout.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/shared/layout/route.layout.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/shared/layout/route.layout.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/hello/hello.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/hello/hello.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/home/home.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/home/home.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/home/route.home.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/home/route.home.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/navbar/route.navbar.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/navbar/route.navbar.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/rooms/rooms.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/rooms/rooms.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/rooms/rooms.new.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/rooms/rooms.new.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/rooms/route.rooms.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/rooms/route.rooms.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/search/route.search.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/search/route.search.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/search/search.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/search/search.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/client/components/shared/globalRoute.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/client/components/shared/globalRoute.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/both/collections/pets.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/both/collections/pets.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/both/collections/rooms.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/both/collections/rooms.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/both/defaults.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/both/defaults.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/both/enums.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/both/enums.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/both/variables.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/both/variables.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/main.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/app/main.js"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/velocity_test-proxy.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_test-proxy.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/3cfe30136434dab57a1fc9d64a01ad61b559fbea.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/3cfe30136434dab57a1fc9d64a01ad61b559fbea.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_test-proxy.js.map"
                }
              }
            },
            "/packages/velocity_node-soft-mirror.js": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_node-soft-mirror.js"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/packages/acf27a727fa9aa2f29f237ade3b2046fb9890e36.map"
                },
                "type": {
                  "type": "constant",
                  "value": "js"
                }
              }
            },
            "/packages/acf27a727fa9aa2f29f237ade3b2046fb9890e36.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_node-soft-mirror.js.map"
                }
              }
            },
            "/12375e6580e0a1cdab15787343e102cf3863b98b.css": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/12375e6580e0a1cdab15787343e102cf3863b98b.css"
                },
                "sourceMapUrl": {
                  "type": "constant",
                  "value": "/12375e6580e0a1cdab15787343e102cf3863b98b.map"
                },
                "type": {
                  "type": "constant",
                  "value": "css"
                }
              }
            },
            "/12375e6580e0a1cdab15787343e102cf3863b98b.map": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/12375e6580e0a1cdab15787343e102cf3863b98b.css.map"
                }
              }
            },
            "/packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.eot": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.eot"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.ttf": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.ttf"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.woff": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.woff"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/velocity_logo.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/velocity_logo.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/velocity_cog.svg": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/velocity_cog.svg"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "/packages/velocity_html-reporter/lib/icon-time.png": {
              "type": "object",
              "members": {
                "absolutePath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet/.meteor/local/build/programs/web.browser/packages/velocity_html-reporter/lib/icon-time.png"
                },
                "sourceMapUrl": {
                  "type": "undefined"
                },
                "type": {
                  "type": "constant",
                  "value": "asset"
                }
              }
            },
            "manifest.json": {
              "type": "object",
              "members": {
                "content": {
                  "type": "constant",
                  "value": "{\"manifest\":[{\"path\":\"packages/underscore.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/underscore.js?0a80a8623e1b40b5df5a05582f288ddd586eaa18\",\"sourceMap\":\"packages/underscore.js.map\",\"sourceMapUrl\":\"/packages/0a80a8623e1b40b5df5a05582f288ddd586eaa18.map\",\"size\":150686,\"hash\":\"0a80a8623e1b40b5df5a05582f288ddd586eaa18\"},{\"path\":\"packages/meteor.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteor.js?81e2f06cff198adaa81b3bc09fc4f3728b7370ec\",\"sourceMap\":\"packages/meteor.js.map\",\"sourceMapUrl\":\"/packages/81e2f06cff198adaa81b3bc09fc4f3728b7370ec.map\",\"size\":109437,\"hash\":\"81e2f06cff198adaa81b3bc09fc4f3728b7370ec\"},{\"path\":\"packages/json.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/json.js?e22856eae714c681199eabc5c0710b904b125554\",\"sourceMap\":\"packages/json.js.map\",\"sourceMapUrl\":\"/packages/e22856eae714c681199eabc5c0710b904b125554.map\",\"size\":58343,\"hash\":\"e22856eae714c681199eabc5c0710b904b125554\"},{\"path\":\"packages/base64.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/base64.js?1a63019243b73298e2964e6d4680f25bca657726\",\"sourceMap\":\"packages/base64.js.map\",\"sourceMapUrl\":\"/packages/1a63019243b73298e2964e6d4680f25bca657726.map\",\"size\":15685,\"hash\":\"1a63019243b73298e2964e6d4680f25bca657726\"},{\"path\":\"packages/ejson.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ejson.js?71047b64b5196348bdbe5fd5eea9ac97a5a9eb14\",\"sourceMap\":\"packages/ejson.js.map\",\"sourceMapUrl\":\"/packages/71047b64b5196348bdbe5fd5eea9ac97a5a9eb14.map\",\"size\":81471,\"hash\":\"71047b64b5196348bdbe5fd5eea9ac97a5a9eb14\"},{\"path\":\"packages/logging.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/logging.js?07e201b648f16be8435a4f666156995eeda0c750\",\"sourceMap\":\"packages/logging.js.map\",\"sourceMapUrl\":\"/packages/07e201b648f16be8435a4f666156995eeda0c750.map\",\"size\":27996,\"hash\":\"07e201b648f16be8435a4f666156995eeda0c750\"},{\"path\":\"packages/reload.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reload.js?da8974b7231dd8c0caccb5f322dcf97329d486d1\",\"sourceMap\":\"packages/reload.js.map\",\"sourceMapUrl\":\"/packages/da8974b7231dd8c0caccb5f322dcf97329d486d1.map\",\"size\":25926,\"hash\":\"da8974b7231dd8c0caccb5f322dcf97329d486d1\"},{\"path\":\"packages/tracker.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/tracker.js?517c8fe8ed6408951a30941e64a5383a7174bcfa\",\"sourceMap\":\"packages/tracker.js.map\",\"sourceMapUrl\":\"/packages/517c8fe8ed6408951a30941e64a5383a7174bcfa.map\",\"size\":68185,\"hash\":\"517c8fe8ed6408951a30941e64a5383a7174bcfa\"},{\"path\":\"packages/random.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/random.js?fe7b46080c91ce482acf6fc326afbc5b176f0502\",\"sourceMap\":\"packages/random.js.map\",\"sourceMapUrl\":\"/packages/fe7b46080c91ce482acf6fc326afbc5b176f0502.map\",\"size\":24099,\"hash\":\"fe7b46080c91ce482acf6fc326afbc5b176f0502\"},{\"path\":\"packages/retry.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/retry.js?1f1dd2c35d300110fdaba51ce4473583bc3bf031\",\"sourceMap\":\"packages/retry.js.map\",\"sourceMapUrl\":\"/packages/1f1dd2c35d300110fdaba51ce4473583bc3bf031.map\",\"size\":7245,\"hash\":\"1f1dd2c35d300110fdaba51ce4473583bc3bf031\"},{\"path\":\"packages/check.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/check.js?ac81167b8513b85b926c167bba423981b0c4cf9c\",\"sourceMap\":\"packages/check.js.map\",\"sourceMapUrl\":\"/packages/ac81167b8513b85b926c167bba423981b0c4cf9c.map\",\"size\":35647,\"hash\":\"ac81167b8513b85b926c167bba423981b0c4cf9c\"},{\"path\":\"packages/id-map.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/id-map.js?9ea6eaae8d74693ce2505a858d9a5e60cf191298\",\"sourceMap\":\"packages/id-map.js.map\",\"sourceMapUrl\":\"/packages/9ea6eaae8d74693ce2505a858d9a5e60cf191298.map\",\"size\":8584,\"hash\":\"9ea6eaae8d74693ce2505a858d9a5e60cf191298\"},{\"path\":\"packages/ordered-dict.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ordered-dict.js?bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37\",\"sourceMap\":\"packages/ordered-dict.js.map\",\"sourceMapUrl\":\"/packages/bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37.map\",\"size\":20395,\"hash\":\"bf8af2f26c8d96bf8b2e6b407d3ed69f23c2cd37\"},{\"path\":\"packages/geojson-utils.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/geojson-utils.js?81b79d5cf96d00b4b7a28987debcffb665c17526\",\"sourceMap\":\"packages/geojson-utils.js.map\",\"sourceMapUrl\":\"/packages/81b79d5cf96d00b4b7a28987debcffb665c17526.map\",\"size\":48339,\"hash\":\"81b79d5cf96d00b4b7a28987debcffb665c17526\"},{\"path\":\"packages/minimongo.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/minimongo.js?e8806aa7782b729b2517ebc0cd10b321667f1427\",\"sourceMap\":\"packages/minimongo.js.map\",\"sourceMapUrl\":\"/packages/e8806aa7782b729b2517ebc0cd10b321667f1427.map\",\"size\":455881,\"hash\":\"e8806aa7782b729b2517ebc0cd10b321667f1427\"},{\"path\":\"packages/ddp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ddp.js?41b62dcceb3ce0de6ca79c6aed088cccde6a44d8\",\"sourceMap\":\"packages/ddp.js.map\",\"sourceMapUrl\":\"/packages/41b62dcceb3ce0de6ca79c6aed088cccde6a44d8.map\",\"size\":617153,\"hash\":\"41b62dcceb3ce0de6ca79c6aed088cccde6a44d8\"},{\"path\":\"packages/follower-livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/follower-livedata.js?74156c6baa89da861fc4ddb58ef158eac71e58e0\",\"sourceMap\":\"packages/follower-livedata.js.map\",\"sourceMapUrl\":\"/packages/74156c6baa89da861fc4ddb58ef158eac71e58e0.map\",\"size\":1490,\"hash\":\"74156c6baa89da861fc4ddb58ef158eac71e58e0\"},{\"path\":\"packages/application-configuration.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/application-configuration.js?dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f\",\"sourceMap\":\"packages/application-configuration.js.map\",\"sourceMapUrl\":\"/packages/dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f.map\",\"size\":1485,\"hash\":\"dcbf1f0774460fccf098a4c9e8fad4c3a0f2952f\"},{\"path\":\"packages/insecure.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/insecure.js?3dc9d4a2dad55999b5b15a447d57f3d5fb66b290\",\"sourceMap\":\"packages/insecure.js.map\",\"sourceMapUrl\":\"/packages/3dc9d4a2dad55999b5b15a447d57f3d5fb66b290.map\",\"size\":1290,\"hash\":\"3dc9d4a2dad55999b5b15a447d57f3d5fb66b290\"},{\"path\":\"packages/mongo.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mongo.js?052f30e968644b2b39a96605ffee73a7684ff37b\",\"sourceMap\":\"packages/mongo.js.map\",\"sourceMapUrl\":\"/packages/052f30e968644b2b39a96605ffee73a7684ff37b.map\",\"size\":147662,\"hash\":\"052f30e968644b2b39a96605ffee73a7684ff37b\"},{\"path\":\"packages/autoupdate.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/autoupdate.js?9a5ea03bf057815385bf569c7acc2c285c005491\",\"sourceMap\":\"packages/autoupdate.js.map\",\"sourceMapUrl\":\"/packages/9a5ea03bf057815385bf569c7acc2c285c005491.map\",\"size\":17152,\"hash\":\"9a5ea03bf057815385bf569c7acc2c285c005491\"},{\"path\":\"packages/meteor-platform.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteor-platform.js?499a2f8522e25820b1153c69a92751ccaae507b3\",\"sourceMap\":\"packages/meteor-platform.js.map\",\"sourceMapUrl\":\"/packages/499a2f8522e25820b1153c69a92751ccaae507b3.map\",\"size\":1384,\"hash\":\"499a2f8522e25820b1153c69a92751ccaae507b3\"},{\"path\":\"packages/less.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/less.js?7d1bf981a25a449d6270558bcfc983313c40cd26\",\"sourceMap\":\"packages/less.js.map\",\"sourceMapUrl\":\"/packages/7d1bf981a25a449d6270558bcfc983313c40cd26.map\",\"size\":1286,\"hash\":\"7d1bf981a25a449d6270558bcfc983313c40cd26\"},{\"path\":\"packages/jquery.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/jquery.js?dd8bac56f8fd3666d433d2285ae01e52597cc51a\",\"sourceMap\":\"packages/jquery.js.map\",\"sourceMapUrl\":\"/packages/dd8bac56f8fd3666d433d2285ae01e52597cc51a.map\",\"size\":1296513,\"hash\":\"dd8bac56f8fd3666d433d2285ae01e52597cc51a\"},{\"path\":\"packages/mrt_bootstrap-3.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mrt_bootstrap-3.js?cdd66806fce55191bbb255a2bd50e366b4d2992e\",\"sourceMap\":\"packages/mrt_bootstrap-3.js.map\",\"sourceMapUrl\":\"/packages/cdd66806fce55191bbb255a2bd50e366b4d2992e.map\",\"size\":247093,\"hash\":\"cdd66806fce55191bbb255a2bd50e366b4d2992e\"},{\"path\":\"packages/deps.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/deps.js?504589e1e9585dec8f9f6094e5a87b22de3783a1\",\"sourceMap\":\"packages/deps.js.map\",\"sourceMapUrl\":\"/packages/504589e1e9585dec8f9f6094e5a87b22de3783a1.map\",\"size\":1442,\"hash\":\"504589e1e9585dec8f9f6094e5a87b22de3783a1\"},{\"path\":\"packages/htmljs.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/htmljs.js?567eb96d5d22631c03d6aca6afa4c42f0d1295f2\",\"sourceMap\":\"packages/htmljs.js.map\",\"sourceMapUrl\":\"/packages/567eb96d5d22631c03d6aca6afa4c42f0d1295f2.map\",\"size\":60161,\"hash\":\"567eb96d5d22631c03d6aca6afa4c42f0d1295f2\"},{\"path\":\"packages/observe-sequence.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/observe-sequence.js?2fd807ea171ead273b9e6458607cb226012d9240\",\"sourceMap\":\"packages/observe-sequence.js.map\",\"sourceMapUrl\":\"/packages/2fd807ea171ead273b9e6458607cb226012d9240.map\",\"size\":30271,\"hash\":\"2fd807ea171ead273b9e6458607cb226012d9240\"},{\"path\":\"packages/reactive-var.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reactive-var.js?20335b7b37165980ddd9f23943b2e5b00aae1cc2\",\"sourceMap\":\"packages/reactive-var.js.map\",\"sourceMapUrl\":\"/packages/20335b7b37165980ddd9f23943b2e5b00aae1cc2.map\",\"size\":13963,\"hash\":\"20335b7b37165980ddd9f23943b2e5b00aae1cc2\"},{\"path\":\"packages/blaze.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/blaze.js?efa68f65e67544b5a05509804bf97e2c91ce75eb\",\"sourceMap\":\"packages/blaze.js.map\",\"sourceMapUrl\":\"/packages/efa68f65e67544b5a05509804bf97e2c91ce75eb.map\",\"size\":391530,\"hash\":\"efa68f65e67544b5a05509804bf97e2c91ce75eb\"},{\"path\":\"packages/ui.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/ui.js?5a663333fd30f8fd913f110e0ef779e84f67c4b8\",\"sourceMap\":\"packages/ui.js.map\",\"sourceMapUrl\":\"/packages/5a663333fd30f8fd913f110e0ef779e84f67c4b8.map\",\"size\":1529,\"hash\":\"5a663333fd30f8fd913f110e0ef779e84f67c4b8\"},{\"path\":\"packages/templating.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/templating.js?599ba307216da826d8b335332ebcc9a497a369a0\",\"sourceMap\":\"packages/templating.js.map\",\"sourceMapUrl\":\"/packages/599ba307216da826d8b335332ebcc9a497a369a0.map\",\"size\":11910,\"hash\":\"599ba307216da826d8b335332ebcc9a497a369a0\"},{\"path\":\"packages/iron_core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_core.js?d966a1f70c94792fd94c8a155bdbef9bec5e0047\",\"sourceMap\":\"packages/iron_core.js.map\",\"sourceMapUrl\":\"/packages/d966a1f70c94792fd94c8a155bdbef9bec5e0047.map\",\"size\":32915,\"hash\":\"d966a1f70c94792fd94c8a155bdbef9bec5e0047\"},{\"path\":\"packages/iron_dynamic-template.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_dynamic-template.js?d425554c9847e4a80567f8ca55719cd6ae3f2722\",\"sourceMap\":\"packages/iron_dynamic-template.js.map\",\"sourceMapUrl\":\"/packages/d425554c9847e4a80567f8ca55719cd6ae3f2722.map\",\"size\":86389,\"hash\":\"d425554c9847e4a80567f8ca55719cd6ae3f2722\"},{\"path\":\"packages/iron_layout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_layout.js?4e65c46acdaf0ce6a8b1a479d7b9d0b5c0902062\",\"sourceMap\":\"packages/iron_layout.js.map\",\"sourceMapUrl\":\"/packages/4e65c46acdaf0ce6a8b1a479d7b9d0b5c0902062.map\",\"size\":62058,\"hash\":\"4e65c46acdaf0ce6a8b1a479d7b9d0b5c0902062\"},{\"path\":\"packages/iron_url.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_url.js?6979e41649a22dcf609df30fc533e36037c7ae58\",\"sourceMap\":\"packages/iron_url.js.map\",\"sourceMapUrl\":\"/packages/6979e41649a22dcf609df30fc533e36037c7ae58.map\",\"size\":69302,\"hash\":\"6979e41649a22dcf609df30fc533e36037c7ae58\"},{\"path\":\"packages/iron_middleware-stack.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_middleware-stack.js?0e0f6983a838a6516556b08e62894f89720e2c44\",\"sourceMap\":\"packages/iron_middleware-stack.js.map\",\"sourceMapUrl\":\"/packages/0e0f6983a838a6516556b08e62894f89720e2c44.map\",\"size\":47239,\"hash\":\"0e0f6983a838a6516556b08e62894f89720e2c44\"},{\"path\":\"packages/iron_location.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_location.js?ca4f0f6672edbfb6cafab6e5c024208d9364eac9\",\"sourceMap\":\"packages/iron_location.js.map\",\"sourceMapUrl\":\"/packages/ca4f0f6672edbfb6cafab6e5c024208d9364eac9.map\",\"size\":52275,\"hash\":\"ca4f0f6672edbfb6cafab6e5c024208d9364eac9\"},{\"path\":\"packages/reactive-dict.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/reactive-dict.js?6b25309b1f0dcf775b44984324878d6f8ad1abc2\",\"sourceMap\":\"packages/reactive-dict.js.map\",\"sourceMapUrl\":\"/packages/6b25309b1f0dcf775b44984324878d6f8ad1abc2.map\",\"size\":19802,\"hash\":\"6b25309b1f0dcf775b44984324878d6f8ad1abc2\"},{\"path\":\"packages/iron_controller.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_controller.js?b02790701804563eafedb2e68c602154983ade06\",\"sourceMap\":\"packages/iron_controller.js.map\",\"sourceMapUrl\":\"/packages/b02790701804563eafedb2e68c602154983ade06.map\",\"size\":41091,\"hash\":\"b02790701804563eafedb2e68c602154983ade06\"},{\"path\":\"packages/iron_router.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/iron_router.js?a427868585af16bb88b7c9996b2449aebb8dbf51\",\"sourceMap\":\"packages/iron_router.js.map\",\"sourceMapUrl\":\"/packages/a427868585af16bb88b7c9996b2449aebb8dbf51.map\",\"size\":216733,\"hash\":\"a427868585af16bb88b7c9996b2449aebb8dbf51\"},{\"path\":\"packages/coffeescript.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/coffeescript.js?969f68786bbc68e6cad299e74922a53af3d1404b\",\"sourceMap\":\"packages/coffeescript.js.map\",\"sourceMapUrl\":\"/packages/969f68786bbc68e6cad299e74922a53af3d1404b.map\",\"size\":1294,\"hash\":\"969f68786bbc68e6cad299e74922a53af3d1404b\"},{\"path\":\"packages/digilord_faker.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/digilord_faker.js?9b288be92cf8355bb1480bf6ff429abce79f492f\",\"sourceMap\":\"packages/digilord_faker.js.map\",\"sourceMapUrl\":\"/packages/9b288be92cf8355bb1480bf6ff429abce79f492f.map\",\"size\":1357,\"hash\":\"9b288be92cf8355bb1480bf6ff429abce79f492f\"},{\"path\":\"packages/dburles_mongo-collection-instances.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/dburles_mongo-collection-instances.js?f78f3ee4031ef50a61202ba52006142409950861\",\"sourceMap\":\"packages/dburles_mongo-collection-instances.js.map\",\"sourceMapUrl\":\"/packages/f78f3ee4031ef50a61202ba52006142409950861.map\",\"size\":7416,\"hash\":\"f78f3ee4031ef50a61202ba52006142409950861\"},{\"path\":\"packages/msavin_mongol.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/msavin_mongol.js?8ff8b4e0de38b10f92e47745211ba1a97087fb8f\",\"sourceMap\":\"packages/msavin_mongol.js.map\",\"sourceMapUrl\":\"/packages/8ff8b4e0de38b10f92e47745211ba1a97087fb8f.map\",\"size\":156664,\"hash\":\"8ff8b4e0de38b10f92e47745211ba1a97087fb8f\"},{\"path\":\"packages/meteorhacks_meteorx.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteorhacks_meteorx.js?afd5ff95b1c1492f60049925f1f827e2b5817bbb\",\"sourceMap\":\"packages/meteorhacks_meteorx.js.map\",\"sourceMapUrl\":\"/packages/afd5ff95b1c1492f60049925f1f827e2b5817bbb.map\",\"size\":1368,\"hash\":\"afd5ff95b1c1492f60049925f1f827e2b5817bbb\"},{\"path\":\"packages/localstorage.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/localstorage.js?9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c\",\"sourceMap\":\"packages/localstorage.js.map\",\"sourceMapUrl\":\"/packages/9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c.map\",\"size\":7092,\"hash\":\"9ec7d68858d2e33aa807e5cfd5e12bb4d62fe00c\"},{\"path\":\"packages/meteorhacks_kadira.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/meteorhacks_kadira.js?59e442ea741bf86014d559bad7a579ed2f76d294\",\"sourceMap\":\"packages/meteorhacks_kadira.js.map\",\"sourceMapUrl\":\"/packages/59e442ea741bf86014d559bad7a579ed2f76d294.map\",\"size\":96654,\"hash\":\"59e442ea741bf86014d559bad7a579ed2f76d294\"},{\"path\":\"packages/practicalmeteor_chai.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/practicalmeteor_chai.js?7fbbbec9a13f4adf082b394c5ddd7230d84afc48\",\"sourceMap\":\"packages/practicalmeteor_chai.js.map\",\"sourceMapUrl\":\"/packages/7fbbbec9a13f4adf082b394c5ddd7230d84afc48.map\",\"size\":570118,\"hash\":\"7fbbbec9a13f4adf082b394c5ddd7230d84afc48\"},{\"path\":\"packages/practicalmeteor_loglevel.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/practicalmeteor_loglevel.js?9185331dfa11fd235edfbef93838d4ca3244d638\",\"sourceMap\":\"packages/practicalmeteor_loglevel.js.map\",\"sourceMapUrl\":\"/packages/9185331dfa11fd235edfbef93838d4ca3244d638.map\",\"size\":28719,\"hash\":\"9185331dfa11fd235edfbef93838d4ca3244d638\"},{\"path\":\"packages/velocity_core.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_core.js?cecf2443254038195518d507d5fe0ecdc5dce435\",\"sourceMap\":\"packages/velocity_core.js.map\",\"sourceMapUrl\":\"/packages/cecf2443254038195518d507d5fe0ecdc5dce435.map\",\"size\":12238,\"hash\":\"cecf2443254038195518d507d5fe0ecdc5dce435\"},{\"path\":\"packages/velocity_shim.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_shim.js?14363d085a412115605c41536e4f2867425b89d5\",\"sourceMap\":\"packages/velocity_shim.js.map\",\"sourceMapUrl\":\"/packages/14363d085a412115605c41536e4f2867425b89d5.map\",\"size\":2905,\"hash\":\"14363d085a412115605c41536e4f2867425b89d5\"},{\"path\":\"packages/sanjo_jasmine.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/sanjo_jasmine.js?6c8e0ce3908e66d0de626b7c10139a1ad3351d76\",\"sourceMap\":\"packages/sanjo_jasmine.js.map\",\"sourceMapUrl\":\"/packages/6c8e0ce3908e66d0de626b7c10139a1ad3351d76.map\",\"size\":537001,\"hash\":\"6c8e0ce3908e66d0de626b7c10139a1ad3351d76\"},{\"path\":\"packages/amplify.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/amplify.js?0943ecb804169b991257a319fa92b9e6f34e2d1b\",\"sourceMap\":\"packages/amplify.js.map\",\"sourceMapUrl\":\"/packages/0943ecb804169b991257a319fa92b9e6f34e2d1b.map\",\"size\":88428,\"hash\":\"0943ecb804169b991257a319fa92b9e6f34e2d1b\"},{\"path\":\"packages/velocity_html-reporter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_html-reporter.js?a615bf3410d795106d7a78c6a94379745879f7df\",\"sourceMap\":\"packages/velocity_html-reporter.js.map\",\"sourceMapUrl\":\"/packages/a615bf3410d795106d7a78c6a94379745879f7df.map\",\"size\":90264,\"hash\":\"a615bf3410d795106d7a78c6a94379745879f7df\"},{\"path\":\"packages/cfs_standard-packages.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_standard-packages.js?19b305d60b4a8e65110bbc6cc2dbfb5143ad376f\",\"sourceMap\":\"packages/cfs_standard-packages.js.map\",\"sourceMapUrl\":\"/packages/19b305d60b4a8e65110bbc6cc2dbfb5143ad376f.map\",\"size\":1306,\"hash\":\"19b305d60b4a8e65110bbc6cc2dbfb5143ad376f\"},{\"path\":\"packages/cfs_base-package.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_base-package.js?593ce74653596b711ba5ca14890e8513fb3544ec\",\"sourceMap\":\"packages/cfs_base-package.js.map\",\"sourceMapUrl\":\"/packages/593ce74653596b711ba5ca14890e8513fb3544ec.map\",\"size\":47990,\"hash\":\"593ce74653596b711ba5ca14890e8513fb3544ec\"},{\"path\":\"packages/livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/livedata.js?718526445deb4d9baacb6d92c551adea1d36c1e1\",\"sourceMap\":\"packages/livedata.js.map\",\"sourceMapUrl\":\"/packages/718526445deb4d9baacb6d92c551adea1d36c1e1.map\",\"size\":1413,\"hash\":\"718526445deb4d9baacb6d92c551adea1d36c1e1\"},{\"path\":\"packages/mongo-livedata.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/mongo-livedata.js?e6ebca489f38b73788b494509a4f83d87fdbf6c0\",\"sourceMap\":\"packages/mongo-livedata.js.map\",\"sourceMapUrl\":\"/packages/e6ebca489f38b73788b494509a4f83d87fdbf6c0.map\",\"size\":1299,\"hash\":\"e6ebca489f38b73788b494509a4f83d87fdbf6c0\"},{\"path\":\"packages/raix_eventemitter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/raix_eventemitter.js?2698ca3a2e678f77962ebe839ad04615958a4c26\",\"sourceMap\":\"packages/raix_eventemitter.js.map\",\"sourceMapUrl\":\"/packages/2698ca3a2e678f77962ebe839ad04615958a4c26.map\",\"size\":24179,\"hash\":\"2698ca3a2e678f77962ebe839ad04615958a4c26\"},{\"path\":\"packages/cfs_storage-adapter.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_storage-adapter.js?cd74b8c12b6ea79b967099c78406ff3eb4bfbcc7\",\"sourceMap\":\"packages/cfs_storage-adapter.js.map\",\"sourceMapUrl\":\"/packages/cd74b8c12b6ea79b967099c78406ff3eb4bfbcc7.map\",\"size\":5347,\"hash\":\"cd74b8c12b6ea79b967099c78406ff3eb4bfbcc7\"},{\"path\":\"packages/cfs_filesystem.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_filesystem.js?9ad24a636eee4618b175d38deb943e91006788a1\",\"sourceMap\":\"packages/cfs_filesystem.js.map\",\"sourceMapUrl\":\"/packages/9ad24a636eee4618b175d38deb943e91006788a1.map\",\"size\":2692,\"hash\":\"9ad24a636eee4618b175d38deb943e91006788a1\"},{\"path\":\"packages/webapp.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/webapp.js?e1be090051b82f046484dccc2de7d747e50c7328\",\"sourceMap\":\"packages/webapp.js.map\",\"sourceMapUrl\":\"/packages/e1be090051b82f046484dccc2de7d747e50c7328.map\",\"size\":3106,\"hash\":\"e1be090051b82f046484dccc2de7d747e50c7328\"},{\"path\":\"packages/session.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/session.js?e436deefadc999c21b6fd16e8e1ecce55c3c3a55\",\"sourceMap\":\"packages/session.js.map\",\"sourceMapUrl\":\"/packages/e436deefadc999c21b6fd16e8e1ecce55c3c3a55.map\",\"size\":6497,\"hash\":\"e436deefadc999c21b6fd16e8e1ecce55c3c3a55\"},{\"path\":\"packages/spacebars.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/spacebars.js?7f53771c84a2eafac2b561c9796dda0d8af8e7f5\",\"sourceMap\":\"packages/spacebars.js.map\",\"sourceMapUrl\":\"/packages/7f53771c84a2eafac2b561c9796dda0d8af8e7f5.map\",\"size\":42206,\"hash\":\"7f53771c84a2eafac2b561c9796dda0d8af8e7f5\"},{\"path\":\"packages/launch-screen.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/launch-screen.js?13e1092ebecdb7208762500188f1dc2dea5603e9\",\"sourceMap\":\"packages/launch-screen.js.map\",\"sourceMapUrl\":\"/packages/13e1092ebecdb7208762500188f1dc2dea5603e9.map\",\"size\":9707,\"hash\":\"13e1092ebecdb7208762500188f1dc2dea5603e9\"},{\"path\":\"packages/url.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/url.js?2312d739008b2ffa52f13c77c5d6fc59c9e17d56\",\"sourceMap\":\"packages/url.js.map\",\"sourceMapUrl\":\"/packages/2312d739008b2ffa52f13c77c5d6fc59c9e17d56.map\",\"size\":6642,\"hash\":\"2312d739008b2ffa52f13c77c5d6fc59c9e17d56\"},{\"path\":\"packages/http.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/http.js?9c5d152169ba9a5a57b6b8ec28e64bbd0d308077\",\"sourceMap\":\"packages/http.js.map\",\"sourceMapUrl\":\"/packages/9c5d152169ba9a5a57b6b8ec28e64bbd0d308077.map\",\"size\":37036,\"hash\":\"9c5d152169ba9a5a57b6b8ec28e64bbd0d308077\"},{\"path\":\"packages/cfs_data-man.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_data-man.js?a69f9a3bd18f305c48ef0bb42bbbbe2a047e4d4e\",\"sourceMap\":\"packages/cfs_data-man.js.map\",\"sourceMapUrl\":\"/packages/a69f9a3bd18f305c48ef0bb42bbbbe2a047e4d4e.map\",\"size\":60745,\"hash\":\"a69f9a3bd18f305c48ef0bb42bbbbe2a047e4d4e\"},{\"path\":\"packages/cfs_file.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_file.js?f44220407bc5afa9d512bd07e33dcd3dde0839b9\",\"sourceMap\":\"packages/cfs_file.js.map\",\"sourceMapUrl\":\"/packages/f44220407bc5afa9d512bd07e33dcd3dde0839b9.map\",\"size\":90383,\"hash\":\"f44220407bc5afa9d512bd07e33dcd3dde0839b9\"},{\"path\":\"packages/cfs_tempstore.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_tempstore.js?57bd2292fb397e5bb2efc7ada35e4edc9c1452f8\",\"sourceMap\":\"packages/cfs_tempstore.js.map\",\"sourceMapUrl\":\"/packages/57bd2292fb397e5bb2efc7ada35e4edc9c1452f8.map\",\"size\":1339,\"hash\":\"57bd2292fb397e5bb2efc7ada35e4edc9c1452f8\"},{\"path\":\"packages/cfs_http-methods.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_http-methods.js?27ebb517f41bc4064a6fa551be12698982803678\",\"sourceMap\":\"packages/cfs_http-methods.js.map\",\"sourceMapUrl\":\"/packages/27ebb517f41bc4064a6fa551be12698982803678.map\",\"size\":2377,\"hash\":\"27ebb517f41bc4064a6fa551be12698982803678\"},{\"path\":\"packages/cfs_http-publish.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_http-publish.js?145ad24eef4127acca730985e0e9bf09770582a8\",\"sourceMap\":\"packages/cfs_http-publish.js.map\",\"sourceMapUrl\":\"/packages/145ad24eef4127acca730985e0e9bf09770582a8.map\",\"size\":3007,\"hash\":\"145ad24eef4127acca730985e0e9bf09770582a8\"},{\"path\":\"packages/cfs_access-point.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_access-point.js?0bfe974ee453abef55cf9a71244e13121aabc0a3\",\"sourceMap\":\"packages/cfs_access-point.js.map\",\"sourceMapUrl\":\"/packages/0bfe974ee453abef55cf9a71244e13121aabc0a3.map\",\"size\":32852,\"hash\":\"0bfe974ee453abef55cf9a71244e13121aabc0a3\"},{\"path\":\"packages/cfs_reactive-property.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_reactive-property.js?9eae0a7e5e4347f034060de7243a83d2f30bc1aa\",\"sourceMap\":\"packages/cfs_reactive-property.js.map\",\"sourceMapUrl\":\"/packages/9eae0a7e5e4347f034060de7243a83d2f30bc1aa.map\",\"size\":14444,\"hash\":\"9eae0a7e5e4347f034060de7243a83d2f30bc1aa\"},{\"path\":\"packages/cfs_reactive-list.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_reactive-list.js?74e35a358dc54480adf3c5649328dfca33bc07f5\",\"sourceMap\":\"packages/cfs_reactive-list.js.map\",\"sourceMapUrl\":\"/packages/74e35a358dc54480adf3c5649328dfca33bc07f5.map\",\"size\":33128,\"hash\":\"74e35a358dc54480adf3c5649328dfca33bc07f5\"},{\"path\":\"packages/cfs_power-queue.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_power-queue.js?255f444fbb9de891f6e803923430c0dc1fa40e4f\",\"sourceMap\":\"packages/cfs_power-queue.js.map\",\"sourceMapUrl\":\"/packages/255f444fbb9de891f6e803923430c0dc1fa40e4f.map\",\"size\":92620,\"hash\":\"255f444fbb9de891f6e803923430c0dc1fa40e4f\"},{\"path\":\"packages/cfs_upload-http.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_upload-http.js?cf37b2941c8cdbfd85cdc3948f57fed4bb429081\",\"sourceMap\":\"packages/cfs_upload-http.js.map\",\"sourceMapUrl\":\"/packages/cf37b2941c8cdbfd85cdc3948f57fed4bb429081.map\",\"size\":68435,\"hash\":\"cf37b2941c8cdbfd85cdc3948f57fed4bb429081\"},{\"path\":\"packages/cfs_collection.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_collection.js?7a8e741d07523167d771eb4bfcb1b1da50cced7e\",\"sourceMap\":\"packages/cfs_collection.js.map\",\"sourceMapUrl\":\"/packages/7a8e741d07523167d771eb4bfcb1b1da50cced7e.map\",\"size\":57421,\"hash\":\"7a8e741d07523167d771eb4bfcb1b1da50cced7e\"},{\"path\":\"packages/cfs_collection-filters.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_collection-filters.js?9444f9ff1045ffe9164a412c994d38824246f7ba\",\"sourceMap\":\"packages/cfs_collection-filters.js.map\",\"sourceMapUrl\":\"/packages/9444f9ff1045ffe9164a412c994d38824246f7ba.map\",\"size\":25721,\"hash\":\"9444f9ff1045ffe9164a412c994d38824246f7ba\"},{\"path\":\"packages/cfs_worker.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/cfs_worker.js?2c2125302bc13e7d07b2ed552a61b8fde61c427d\",\"sourceMap\":\"packages/cfs_worker.js.map\",\"sourceMapUrl\":\"/packages/2c2125302bc13e7d07b2ed552a61b8fde61c427d.map\",\"size\":1452,\"hash\":\"2c2125302bc13e7d07b2ed552a61b8fde61c427d\"},{\"path\":\"packages/global-imports.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/global-imports.js?ed6de60a9777b33d7974a399f2f3ee00b345e10b\",\"size\":975,\"hash\":\"ed6de60a9777b33d7974a399f2f3ee00b345e10b\"},{\"path\":\"app/client/components/shared/layout/template.template.layout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/shared/layout/template.template.layout.js?a86b670d20548a67007f788b5cf6456abbae9613\",\"size\":433,\"hash\":\"a86b670d20548a67007f788b5cf6456abbae9613\"},{\"path\":\"app/client/components/shared/loading/template.template.loading.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/shared/loading/template.template.loading.js?cff4c8aa3df769423ce4ea70bf354d4927870654\",\"size\":185,\"hash\":\"cff4c8aa3df769423ce4ea70bf354d4927870654\"},{\"path\":\"app/client/components/shared/notFound/template.template.notFound.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/shared/notFound/template.template.notFound.js?9c82fd002d924d033a54e8ebafcd68b48300cd47\",\"size\":190,\"hash\":\"9c82fd002d924d033a54e8ebafcd68b48300cd47\"},{\"path\":\"app/client/components/hello/template.template.hello.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/hello/template.template.hello.js?403ed4445c6a27505fcd8c173561e8150b4fc09e\",\"size\":332,\"hash\":\"403ed4445c6a27505fcd8c173561e8150b4fc09e\"},{\"path\":\"app/client/components/home/template.template.home.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/home/template.template.home.js?5ee71d25242f0026624b926162a36121590bcfaf\",\"size\":173,\"hash\":\"5ee71d25242f0026624b926162a36121590bcfaf\"},{\"path\":\"app/client/components/navbar/template.template.navbar.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/navbar/template.template.navbar.js?e5be49b364c7ef15e6c54a7f7fb093f59f3f1152\",\"size\":2568,\"hash\":\"e5be49b364c7ef15e6c54a7f7fb093f59f3f1152\"},{\"path\":\"app/client/components/rooms/template.template.rooms.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/rooms/template.template.rooms.js?c129e4e6d7f08fc8841e657f24a1ba8ac83c41de\",\"size\":842,\"hash\":\"c129e4e6d7f08fc8841e657f24a1ba8ac83c41de\"},{\"path\":\"app/client/components/rooms/template.template.rooms.new.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/rooms/template.template.rooms.new.js?5ce602e49939a085b8ea0e1a5deddf106ffbff19\",\"size\":1805,\"hash\":\"5ce602e49939a085b8ea0e1a5deddf106ffbff19\"},{\"path\":\"app/client/components/search/template.template.search.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/search/template.template.search.js?a51619f311ed8aaa4a9374fcbd4dfd5098ddbcd7\",\"size\":2288,\"hash\":\"a51619f311ed8aaa4a9374fcbd4dfd5098ddbcd7\"},{\"path\":\"app/client/components/shared/layout/layout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/shared/layout/layout.js?e97600084e3e94d6f0a5db017a77eaca69b85e74\",\"size\":69,\"hash\":\"e97600084e3e94d6f0a5db017a77eaca69b85e74\"},{\"path\":\"app/client/components/shared/layout/route.layout.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/shared/layout/route.layout.js?e97600084e3e94d6f0a5db017a77eaca69b85e74\",\"size\":69,\"hash\":\"e97600084e3e94d6f0a5db017a77eaca69b85e74\"},{\"path\":\"app/client/components/hello/hello.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/hello/hello.js?dff2be21d2076ec2b18ace92e14440c423390324\",\"size\":420,\"hash\":\"dff2be21d2076ec2b18ace92e14440c423390324\"},{\"path\":\"app/client/components/home/home.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/home/home.js?e97600084e3e94d6f0a5db017a77eaca69b85e74\",\"size\":69,\"hash\":\"e97600084e3e94d6f0a5db017a77eaca69b85e74\"},{\"path\":\"app/client/components/home/route.home.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/home/route.home.js?da47f5990eddbd1666bcc266556983ce8e4f7770\",\"size\":156,\"hash\":\"da47f5990eddbd1666bcc266556983ce8e4f7770\"},{\"path\":\"app/client/components/navbar/route.navbar.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/navbar/route.navbar.js?e97600084e3e94d6f0a5db017a77eaca69b85e74\",\"size\":69,\"hash\":\"e97600084e3e94d6f0a5db017a77eaca69b85e74\"},{\"path\":\"app/client/components/rooms/rooms.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/rooms/rooms.js?76a652eb622bccf5912a5e7cb8a5e15f760bd6ec\",\"size\":229,\"hash\":\"76a652eb622bccf5912a5e7cb8a5e15f760bd6ec\"},{\"path\":\"app/client/components/rooms/rooms.new.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/rooms/rooms.new.js?4deb91a3797ae367d1612800bf5ed1d9e93d4078\",\"size\":1914,\"hash\":\"4deb91a3797ae367d1612800bf5ed1d9e93d4078\"},{\"path\":\"app/client/components/rooms/route.rooms.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/rooms/route.rooms.js?380631210e40b986a06d89df4e7002bfbc084d01\",\"size\":241,\"hash\":\"380631210e40b986a06d89df4e7002bfbc084d01\"},{\"path\":\"app/client/components/search/route.search.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/search/route.search.js?8af66ba5efe2422662e4044a179cb5d23c3ecd1c\",\"size\":425,\"hash\":\"8af66ba5efe2422662e4044a179cb5d23c3ecd1c\"},{\"path\":\"app/client/components/search/search.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/search/search.js?eec8a1c06f371579c4f91fb88b26a1d41eee5691\",\"size\":839,\"hash\":\"eec8a1c06f371579c4f91fb88b26a1d41eee5691\"},{\"path\":\"app/client/components/shared/globalRoute.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/client/components/shared/globalRoute.js?0a60b1478be0166403c5ee68d6e2f19b2726b3ed\",\"size\":187,\"hash\":\"0a60b1478be0166403c5ee68d6e2f19b2726b3ed\"},{\"path\":\"app/both/collections/pets.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/both/collections/pets.js?1b73f3c107f73dafa85a53af9eb7fb3ee95a5c71\",\"size\":152,\"hash\":\"1b73f3c107f73dafa85a53af9eb7fb3ee95a5c71\"},{\"path\":\"app/both/collections/rooms.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/both/collections/rooms.js?77ae3a3e4bcdf0a14ce3b67276b21b6d9484744b\",\"size\":138,\"hash\":\"77ae3a3e4bcdf0a14ce3b67276b21b6d9484744b\"},{\"path\":\"app/both/defaults.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/both/defaults.js?1dea0010af1d6c957c22346c7ecc8b5edcf54af9\",\"size\":69,\"hash\":\"1dea0010af1d6c957c22346c7ecc8b5edcf54af9\"},{\"path\":\"app/both/enums.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/both/enums.js?58964be7b18bb2c4c4c00ef073a70973b18d5347\",\"size\":69,\"hash\":\"58964be7b18bb2c4c4c00ef073a70973b18d5347\"},{\"path\":\"app/both/variables.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/both/variables.js?1dea0010af1d6c957c22346c7ecc8b5edcf54af9\",\"size\":69,\"hash\":\"1dea0010af1d6c957c22346c7ecc8b5edcf54af9\"},{\"path\":\"app/main.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/main.js?c3b12cd3e5a91b2491db394a9ee7a9f692490fc0\",\"size\":102,\"hash\":\"c3b12cd3e5a91b2491db394a9ee7a9f692490fc0\"},{\"path\":\"packages/velocity_test-proxy.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_test-proxy.js?3cfe30136434dab57a1fc9d64a01ad61b559fbea\",\"sourceMap\":\"packages/velocity_test-proxy.js.map\",\"sourceMapUrl\":\"/packages/3cfe30136434dab57a1fc9d64a01ad61b559fbea.map\",\"size\":12770,\"hash\":\"3cfe30136434dab57a1fc9d64a01ad61b559fbea\"},{\"path\":\"packages/velocity_node-soft-mirror.js\",\"where\":\"client\",\"type\":\"js\",\"cacheable\":true,\"url\":\"/packages/velocity_node-soft-mirror.js?acf27a727fa9aa2f29f237ade3b2046fb9890e36\",\"sourceMap\":\"packages/velocity_node-soft-mirror.js.map\",\"sourceMapUrl\":\"/packages/acf27a727fa9aa2f29f237ade3b2046fb9890e36.map\",\"size\":11067,\"hash\":\"acf27a727fa9aa2f29f237ade3b2046fb9890e36\"},{\"path\":\"12375e6580e0a1cdab15787343e102cf3863b98b.css\",\"where\":\"client\",\"type\":\"css\",\"cacheable\":true,\"url\":\"/12375e6580e0a1cdab15787343e102cf3863b98b.css\",\"sourceMap\":\"12375e6580e0a1cdab15787343e102cf3863b98b.css.map\",\"sourceMapUrl\":\"/12375e6580e0a1cdab15787343e102cf3863b98b.map\",\"size\":147049,\"hash\":\"12375e6580e0a1cdab15787343e102cf3863b98b\"},{\"path\":\"packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.eot\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.eot\",\"size\":20290,\"hash\":\"23799c0aa7b60fb1a66993d024f98ac105e74e93\"},{\"path\":\"packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.ttf\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.ttf\",\"size\":41236,\"hash\":\"536d2b1b2f3462fb122df1922f2e232546f1b11d\"},{\"path\":\"packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.svg\",\"size\":62850,\"hash\":\"ecee9033d9183117d8f59df0e7238e2b24002b24\"},{\"path\":\"packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.woff\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/mrt_bootstrap-3/bootstrap-3/fonts/glyphicons-halflings-regular.woff\",\"size\":23292,\"hash\":\"c6ea7b1a5bb16b160cc9b8a02f6f6371b5ef7b73\"},{\"path\":\"packages/velocity_html-reporter/lib/velocity_logo.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/velocity_logo.svg\",\"size\":3723,\"hash\":\"bd19ecdc8eb1084f7bb562c298e4ce41f9cdc698\"},{\"path\":\"packages/velocity_html-reporter/lib/velocity_cog.svg\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/velocity_cog.svg\",\"size\":987,\"hash\":\"6e74acfffcbd2bafdc8a95d9db7762ece07b1e81\"},{\"path\":\"packages/velocity_html-reporter/lib/icon-time.png\",\"where\":\"client\",\"type\":\"asset\",\"cacheable\":false,\"url\":\"/packages/velocity_html-reporter/lib/icon-time.png\",\"size\":2834,\"hash\":\"868f492022a4dab0f1522de6aae0773531bc6e85\"}],\"version\":\"0b435aa5cd786050ccc6690b6e821b582f4e62b6\"}"
                },
                "type": {
                  "type": "constant",
                  "value": "json"
                }
              }
            }
          }
        },
        "inlineScriptsAllowed": {
          "type": "function"
        },
        "setInlineScriptsAllowed": {
          "type": "function"
        },
        "setBundledJsCssPrefix": {
          "type": "function"
        },
        "addStaticJs": {
          "type": "function"
        },
        "getBoilerplate": {
          "type": "function"
        },
        "additionalStaticJs": {
          "type": "object"
        },
        "refreshableAssets": {
          "type": "object",
          "members": {
            "allCss": {
              "type": "array"
            }
          }
        }
      }
    }
  },
  "check": {
    "check": {
      "type": "function"
    },
    "Match": {
      "type": "object",
      "members": {
        "Optional": {
          "type": "function"
        },
        "OneOf": {
          "type": "function"
        },
        "Any": {
          "type": "array"
        },
        "Where": {
          "type": "function"
        },
        "ObjectIncluding": {
          "type": "function"
        },
        "ObjectWithValues": {
          "type": "function"
        },
        "Integer": {
          "type": "array"
        },
        "Error": {
          "type": "function",
          "refID": 13,
          "members": {
            "captureStackTrace": {
              "type": "function"
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 13
                }
              }
            }
          }
        },
        "test": {
          "type": "function"
        }
      }
    }
  },
  "retry": {
    "Retry": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "clear": {
              "type": "function"
            },
            "retryLater": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "callback-hook": {
    "Hook": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "register": {
              "type": "function"
            },
            "each": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ddp": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "object",
      "members": {
        "ClientStream": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "send": {
                  "type": "function"
                },
                "on": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toSockjsUrl": {
          "type": "function"
        },
        "SessionCollectionView": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "isEmpty": {
                  "type": "function"
                },
                "diff": {
                  "type": "function"
                },
                "diffDocument": {
                  "type": "function"
                },
                "added": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "removed": {
                  "type": "function"
                }
              }
            }
          }
        },
        "calculateVersion": {
          "type": "function"
        },
        "SUPPORTED_DDP_VERSIONS": {
          "type": "array"
        },
        "Connection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "registerStore": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "methods": {
                  "type": "function"
                },
                "call": {
                  "type": "function"
                },
                "apply": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "userId": {
                  "type": "function"
                },
                "setUserId": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "follower-livedata": {
    "Follower": {
      "type": "object",
      "members": {
        "connect": {
          "type": "function"
        }
      }
    }
  },
  "application-configuration": {
    "AppConfig": {
      "type": "object",
      "members": {
        "findGalaxy": {
          "type": "function"
        },
        "getAppConfig": {
          "type": "function"
        },
        "getStarForThisJob": {
          "type": "function"
        },
        "configurePackage": {
          "type": "function"
        },
        "configureService": {
          "type": "function"
        }
      }
    }
  },
  "binary-heap": {
    "MaxHeap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "maxElementId": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinMaxHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "insecure": {},
  "mongo": {
    "MongoTest": {
      "type": "object",
      "members": {
        "DocFetcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "fetch": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Mongo": {
      "type": "object",
      "members": {
        "Collection": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "refID": 2,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "refID": 20,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObjectID": {
          "ref": 20
        },
        "Cursor": {
          "ref": 2
        }
      }
    }
  },
  "autoupdate": {
    "Autoupdate": {
      "type": "object",
      "members": {
        "autoupdateVersion": {
          "type": "constant",
          "value": "H9tLezPadTgQfsaKT"
        },
        "autoupdateVersionRefreshable": {
          "type": "constant",
          "value": "21e3333eaf676a0ae0f4d7f39fa3887354cb4b5d"
        },
        "autoupdateVersionCordova": {
          "type": "constant",
          "value": "none"
        },
        "appId": {
          "type": "constant",
          "value": "i51azg16jsyoy1kxot45"
        }
      }
    }
  },
  "meteor-platform": {},
  "less": {},
  "mrt:bootstrap-3": {},
  "iron:core": {
    "Iron": {
      "type": "object",
      "members": {
        "utils": {
          "type": "object",
          "members": {
            "assert": {
              "type": "function"
            },
            "warn": {
              "type": "function"
            },
            "defaultValue": {
              "type": "function"
            },
            "inherits": {
              "type": "function"
            },
            "extend": {
              "type": "function"
            },
            "namespace": {
              "type": "function"
            },
            "resolve": {
              "type": "function"
            },
            "capitalize": {
              "type": "function"
            },
            "classCase": {
              "type": "function"
            },
            "camelCase": {
              "type": "function"
            },
            "notifyDeprecated": {
              "type": "function"
            },
            "withDeprecatedNotice": {
              "type": "function"
            },
            "debug": {
              "type": "function"
            },
            "get": {
              "type": "function"
            }
          }
        },
        "DynamicTemplate": {
          "type": "function",
          "members": {
            "getParentDataContext": {
              "type": "function",
              "refID": 31
            },
            "getDataContext": {
              "type": "function",
              "refID": 33
            },
            "getInclusionArguments": {
              "type": "function",
              "refID": 35
            },
            "args": {
              "type": "function",
              "refID": 37
            },
            "extend": {
              "type": "function",
              "refID": 39
            },
            "findFirstLookupHost": {
              "type": "function",
              "refID": 41
            },
            "findLookupHostWithProperty": {
              "type": "function",
              "refID": 43
            },
            "findLookupHostWithHelper": {
              "type": "function",
              "refID": 45
            },
            "prototype": {
              "type": "object",
              "members": {
                "template": {
                  "type": "function",
                  "refID": 48
                },
                "defaultTemplate": {
                  "type": "function",
                  "refID": 50
                },
                "clear": {
                  "type": "function"
                },
                "data": {
                  "type": "function",
                  "refID": 54
                },
                "create": {
                  "type": "function",
                  "refID": 56
                },
                "renderView": {
                  "type": "function",
                  "refID": 58
                },
                "destroy": {
                  "type": "function",
                  "refID": 60
                },
                "onViewCreated": {
                  "type": "function",
                  "refID": 62
                },
                "onViewReady": {
                  "type": "function",
                  "refID": 64
                },
                "onViewDestroyed": {
                  "type": "function",
                  "refID": 66
                },
                "events": {
                  "type": "function",
                  "refID": 68
                },
                "insert": {
                  "type": "function",
                  "refID": 70
                }
              }
            }
          }
        },
        "Layout": {
          "type": "function",
          "refID": 72,
          "members": {
            "DEFAULT_REGION": {
              "type": "constant",
              "value": "main"
            },
            "getParentDataContext": {
              "ref": 31
            },
            "getDataContext": {
              "ref": 33
            },
            "getInclusionArguments": {
              "ref": 35
            },
            "args": {
              "ref": 37
            },
            "extend": {
              "ref": 39
            },
            "findFirstLookupHost": {
              "ref": 41
            },
            "findLookupHostWithProperty": {
              "ref": 43
            },
            "findLookupHostWithHelper": {
              "ref": 45
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 72
                },
                "region": {
                  "type": "function"
                },
                "destroyRegions": {
                  "type": "function"
                },
                "render": {
                  "type": "function"
                },
                "has": {
                  "type": "function"
                },
                "regionKeys": {
                  "type": "function"
                },
                "clear": {
                  "type": "function"
                },
                "clearAll": {
                  "type": "function"
                },
                "beginRendering": {
                  "type": "function"
                },
                "onRegionCreated": {
                  "type": "function"
                },
                "onRegionRendered": {
                  "type": "function"
                },
                "onRegionDestroyed": {
                  "type": "function"
                },
                "template": {
                  "ref": 48
                },
                "defaultTemplate": {
                  "ref": 50
                },
                "data": {
                  "ref": 54
                },
                "create": {
                  "ref": 56
                },
                "renderView": {
                  "ref": 58
                },
                "destroy": {
                  "ref": 60
                },
                "onViewCreated": {
                  "ref": 62
                },
                "onViewReady": {
                  "ref": 64
                },
                "onViewDestroyed": {
                  "ref": 66
                },
                "events": {
                  "ref": 68
                },
                "insert": {
                  "ref": 70
                }
              }
            }
          }
        },
        "Url": {
          "type": "function",
          "members": {
            "normalize": {
              "type": "function"
            },
            "isSameOrigin": {
              "type": "function"
            },
            "fromQueryString": {
              "type": "function"
            },
            "toQueryString": {
              "type": "function"
            },
            "parse": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "test": {
                  "type": "function"
                },
                "exec": {
                  "type": "function"
                },
                "params": {
                  "type": "function"
                },
                "resolve": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MiddlewareStack": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "findByName": {
                  "type": "function"
                },
                "push": {
                  "type": "function"
                },
                "append": {
                  "type": "function"
                },
                "insertAt": {
                  "type": "function"
                },
                "insertBefore": {
                  "type": "function"
                },
                "insertAfter": {
                  "type": "function"
                },
                "concat": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Controller": {
          "type": "function",
          "members": {
            "extend": {
              "type": "function",
              "refID": 135
            },
            "events": {
              "type": "function",
              "refID": 137
            },
            "helpers": {
              "type": "function",
              "refID": 139
            },
            "prototype": {
              "type": "object",
              "members": {
                "layout": {
                  "type": "function",
                  "refID": 142
                },
                "render": {
                  "type": "function",
                  "refID": 144
                },
                "beginRendering": {
                  "type": "function",
                  "refID": 146
                },
                "init": {
                  "type": "function"
                },
                "wait": {
                  "type": "function",
                  "refID": 150
                },
                "ready": {
                  "type": "function",
                  "refID": 152
                }
              }
            }
          }
        },
        "RouteController": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 135
            },
            "events": {
              "ref": 137
            },
            "helpers": {
              "ref": 139
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "type": "function"
                },
                "lookupOption": {
                  "type": "function"
                },
                "configureFromUrl": {
                  "type": "function"
                },
                "runHooks": {
                  "type": "function"
                },
                "getParams": {
                  "type": "function"
                },
                "setParams": {
                  "type": "function"
                },
                "init": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                },
                "layout": {
                  "ref": 142
                },
                "render": {
                  "ref": 144
                },
                "beginRendering": {
                  "ref": 146
                },
                "wait": {
                  "ref": 150
                },
                "ready": {
                  "ref": 152
                }
              }
            }
          }
        },
        "Route": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getName": {
                  "type": "function"
                },
                "findControllerConstructor": {
                  "type": "function"
                },
                "createController": {
                  "type": "function"
                },
                "setControllerParams": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                },
                "path": {
                  "type": "function"
                },
                "url": {
                  "type": "function"
                },
                "params": {
                  "type": "function"
                },
                "get": {
                  "type": "function"
                },
                "post": {
                  "type": "function"
                },
                "put": {
                  "type": "function"
                },
                "delete": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Router": {
          "type": "function",
          "members": {
            "HOOK_TYPES": {
              "type": "array"
            },
            "hooks": {
              "type": "object",
              "members": {
                "loading": {
                  "type": "function"
                },
                "dataNotFound": {
                  "type": "function"
                }
              }
            },
            "plugins": {
              "type": "object",
              "members": {
                "loading": {
                  "type": "function"
                },
                "dataNotFound": {
                  "type": "function"
                }
              }
            },
            "bodyParser": {
              "type": "function",
              "members": {
                "json": {
                  "type": "function"
                },
                "raw": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                },
                "urlencoded": {
                  "type": "function"
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "init": {
                  "type": "function"
                },
                "configure": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "route": {
                  "type": "function"
                },
                "findFirstRoute": {
                  "type": "function"
                },
                "path": {
                  "type": "function"
                },
                "url": {
                  "type": "function"
                },
                "createController": {
                  "type": "function"
                },
                "setTemplateNameConverter": {
                  "type": "function"
                },
                "setControllerNameConverter": {
                  "type": "function"
                },
                "toTemplateName": {
                  "type": "function"
                },
                "toControllerName": {
                  "type": "function"
                },
                "addHook": {
                  "type": "function"
                },
                "lookupHook": {
                  "type": "function"
                },
                "getHooks": {
                  "type": "function"
                },
                "onRun": {
                  "type": "function"
                },
                "onRerun": {
                  "type": "function"
                },
                "onBeforeAction": {
                  "type": "function"
                },
                "onAfterAction": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "waitOn": {
                  "type": "function"
                },
                "subscriptions": {
                  "type": "function"
                },
                "load": {
                  "type": "function"
                },
                "before": {
                  "type": "function"
                },
                "after": {
                  "type": "function"
                },
                "unload": {
                  "type": "function"
                },
                "plugin": {
                  "type": "function"
                },
                "configureBodyParsers": {
                  "type": "function"
                },
                "start": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "iron:dynamic-template": {},
  "iron:layout": {},
  "iron:url": {},
  "iron:middleware-stack": {
    "Handler": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "test": {
              "type": "function"
            },
            "params": {
              "type": "function"
            },
            "resolve": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "iron:location": {},
  "reactive-dict": {
    "ReactiveDict": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "set": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "equals": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "iron:controller": {},
  "iron:router": {
    "Router": {
      "type": "function",
      "members": {
        "routes": {
          "type": "array"
        },
        "options": {
          "type": "object"
        },
        "init": {
          "type": "function"
        },
        "configure": {
          "type": "function"
        },
        "map": {
          "type": "function"
        },
        "route": {
          "type": "function"
        },
        "findFirstRoute": {
          "type": "function"
        },
        "path": {
          "type": "function"
        },
        "url": {
          "type": "function"
        },
        "createController": {
          "type": "function"
        },
        "setTemplateNameConverter": {
          "type": "function"
        },
        "setControllerNameConverter": {
          "type": "function"
        },
        "toTemplateName": {
          "type": "function"
        },
        "toControllerName": {
          "type": "function"
        },
        "addHook": {
          "type": "function"
        },
        "lookupHook": {
          "type": "function"
        },
        "getHooks": {
          "type": "function"
        },
        "onRun": {
          "type": "function"
        },
        "onRerun": {
          "type": "function"
        },
        "onBeforeAction": {
          "type": "function"
        },
        "onAfterAction": {
          "type": "function"
        },
        "onStop": {
          "type": "function"
        },
        "waitOn": {
          "type": "function"
        },
        "subscriptions": {
          "type": "function"
        },
        "load": {
          "type": "function"
        },
        "before": {
          "type": "function"
        },
        "after": {
          "type": "function"
        },
        "unload": {
          "type": "function"
        },
        "plugin": {
          "type": "function"
        },
        "configureBodyParsers": {
          "type": "function"
        },
        "start": {
          "type": "function"
        },
        "dispatch": {
          "type": "function"
        }
      }
    },
    "RouteController": {
      "type": "function",
      "members": {
        "extend": {
          "type": "function"
        },
        "events": {
          "type": "function"
        },
        "helpers": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "type": "function"
            },
            "lookupOption": {
              "type": "function"
            },
            "configureFromUrl": {
              "type": "function"
            },
            "runHooks": {
              "type": "function"
            },
            "getParams": {
              "type": "function"
            },
            "setParams": {
              "type": "function"
            },
            "init": {
              "type": "function"
            },
            "dispatch": {
              "type": "function"
            },
            "layout": {
              "type": "function"
            },
            "render": {
              "type": "function"
            },
            "beginRendering": {
              "type": "function"
            },
            "wait": {
              "type": "function"
            },
            "ready": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "coffeescript": {},
  "digilord:faker": {
    "faker": {
      "type": "object",
      "members": {
        "name": {
          "type": "object",
          "members": {
            "firstName": {
              "type": "function"
            },
            "lastName": {
              "type": "function"
            },
            "findName": {
              "type": "function"
            },
            "prefix": {
              "type": "function"
            },
            "suffix": {
              "type": "function"
            }
          }
        },
        "address": {
          "type": "object",
          "members": {
            "zipCode": {
              "type": "function"
            },
            "city": {
              "type": "function"
            },
            "cityPrefix": {
              "type": "function"
            },
            "citySuffix": {
              "type": "function"
            },
            "streetName": {
              "type": "function"
            },
            "streetAddress": {
              "type": "function"
            },
            "streetSuffix": {
              "type": "function"
            },
            "secondaryAddress": {
              "type": "function"
            },
            "county": {
              "type": "function"
            },
            "country": {
              "type": "function"
            },
            "state": {
              "type": "function"
            },
            "stateAbbr": {
              "type": "function"
            },
            "latitude": {
              "type": "function"
            },
            "longitude": {
              "type": "function"
            }
          }
        },
        "phone": {
          "type": "object",
          "members": {
            "phoneNumber": {
              "type": "function"
            },
            "phoneNumberFormat": {
              "type": "function"
            },
            "phoneFormats": {
              "type": "function"
            }
          }
        },
        "internet": {
          "type": "object",
          "members": {
            "avatar": {
              "type": "function"
            },
            "email": {
              "type": "function"
            },
            "userName": {
              "type": "function"
            },
            "domainName": {
              "type": "function"
            },
            "domainSuffix": {
              "type": "function"
            },
            "domainWord": {
              "type": "function"
            },
            "ip": {
              "type": "function"
            },
            "userAgent": {
              "type": "function"
            },
            "color": {
              "type": "function"
            },
            "password": {
              "type": "function"
            }
          }
        },
        "company": {
          "type": "object",
          "members": {
            "suffixes": {
              "type": "function"
            },
            "companyName": {
              "type": "function"
            },
            "companySuffix": {
              "type": "function"
            },
            "catchPhrase": {
              "type": "function"
            },
            "bs": {
              "type": "function"
            },
            "catchPhraseAdjective": {
              "type": "function"
            },
            "catchPhraseDescriptor": {
              "type": "function"
            },
            "catchPhraseNoun": {
              "type": "function"
            },
            "bsAdjective": {
              "type": "function"
            },
            "bsBuzz": {
              "type": "function"
            },
            "bsNoun": {
              "type": "function"
            }
          }
        },
        "image": {
          "type": "object",
          "members": {
            "image": {
              "type": "function"
            },
            "avatar": {
              "type": "function"
            },
            "imageUrl": {
              "type": "function"
            },
            "abstract": {
              "type": "function"
            },
            "animals": {
              "type": "function"
            },
            "business": {
              "type": "function"
            },
            "cats": {
              "type": "function"
            },
            "city": {
              "type": "function"
            },
            "food": {
              "type": "function"
            },
            "nightlife": {
              "type": "function"
            },
            "fashion": {
              "type": "function"
            },
            "people": {
              "type": "function"
            },
            "nature": {
              "type": "function"
            },
            "sports": {
              "type": "function"
            },
            "technics": {
              "type": "function"
            },
            "transport": {
              "type": "function"
            }
          }
        },
        "lorem": {
          "type": "object",
          "members": {
            "words": {
              "type": "function"
            },
            "sentence": {
              "type": "function"
            },
            "sentences": {
              "type": "function"
            },
            "paragraph": {
              "type": "function"
            },
            "paragraphs": {
              "type": "function"
            }
          }
        },
        "helpers": {
          "type": "object",
          "members": {
            "randomNumber": {
              "type": "function"
            },
            "randomize": {
              "type": "function"
            },
            "slugify": {
              "type": "function"
            },
            "replaceSymbolWithNumber": {
              "type": "function"
            },
            "shuffle": {
              "type": "function"
            },
            "mustache": {
              "type": "function"
            },
            "createCard": {
              "type": "function"
            },
            "contextualCard": {
              "type": "function"
            },
            "userCard": {
              "type": "function"
            },
            "createTransaction": {
              "type": "function"
            }
          }
        },
        "date": {
          "type": "object",
          "members": {
            "past": {
              "type": "function"
            },
            "future": {
              "type": "function"
            },
            "between": {
              "type": "function"
            },
            "recent": {
              "type": "function"
            }
          }
        },
        "random": {
          "type": "object",
          "members": {
            "number": {
              "type": "function"
            },
            "array_element": {
              "type": "function"
            },
            "object_element": {
              "type": "function"
            },
            "uuid": {
              "type": "function"
            }
          }
        },
        "finance": {
          "type": "object",
          "members": {
            "account": {
              "type": "function"
            },
            "accountName": {
              "type": "function"
            },
            "mask": {
              "type": "function"
            },
            "amount": {
              "type": "function"
            },
            "transactionType": {
              "type": "function"
            },
            "currencyCode": {
              "type": "function"
            },
            "currencyName": {
              "type": "function"
            },
            "currencySymbol": {
              "type": "function"
            }
          }
        },
        "hacker": {
          "type": "object",
          "members": {
            "abbreviation": {
              "type": "function"
            },
            "adjective": {
              "type": "function"
            },
            "noun": {
              "type": "function"
            },
            "verb": {
              "type": "function"
            },
            "ingverb": {
              "type": "function"
            },
            "phrase": {
              "type": "function"
            }
          }
        },
        "locales": {
          "type": "object",
          "members": {
            "de": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "German"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "legal_form": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "nobility_title_prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "de_AT": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "German (Austria)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "legal_form": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "nobility_title_prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "de_CH": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "German (Switzerland)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country_code": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "English"
                },
                "separator": {
                  "type": "constant",
                  "value": " & "
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "county": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "country_code": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "postcode_by_state": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "time_zone": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "credit_card": {
                  "type": "object",
                  "members": {
                    "visa": {
                      "type": "array"
                    },
                    "mastercard": {
                      "type": "array"
                    },
                    "discover": {
                      "type": "array"
                    },
                    "american_express": {
                      "type": "array"
                    },
                    "diners_club": {
                      "type": "array"
                    },
                    "jcb": {
                      "type": "array"
                    },
                    "switch": {
                      "type": "array"
                    },
                    "solo": {
                      "type": "array"
                    },
                    "dankort": {
                      "type": "constant",
                      "value": "/5019-####-####-###L/"
                    },
                    "maestro": {
                      "type": "array"
                    },
                    "forbrugsforeningen": {
                      "type": "constant",
                      "value": "/6007-22##-####-###L/"
                    },
                    "laser": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    },
                    "avatar_uri": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "business": {
                  "type": "object",
                  "members": {
                    "credit_card_numbers": {
                      "type": "array"
                    },
                    "credit_card_expiry_dates": {
                      "type": "array"
                    },
                    "credit_card_types": {
                      "type": "array"
                    }
                  }
                },
                "commerce": {
                  "type": "object",
                  "members": {
                    "color": {
                      "type": "array"
                    },
                    "department": {
                      "type": "array"
                    },
                    "product_name": {
                      "type": "object",
                      "members": {
                        "adjective": {
                          "type": "array"
                        },
                        "material": {
                          "type": "array"
                        },
                        "product": {
                          "type": "array"
                        }
                      }
                    }
                  }
                },
                "team": {
                  "type": "object",
                  "members": {
                    "creature": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "hacker": {
                  "type": "object",
                  "members": {
                    "abbreviation": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "verb": {
                      "type": "array"
                    },
                    "ingverb": {
                      "type": "array"
                    }
                  }
                },
                "app": {
                  "type": "object",
                  "members": {
                    "name": {
                      "type": "array"
                    },
                    "version": {
                      "type": "array"
                    },
                    "author": {
                      "type": "array"
                    }
                  }
                },
                "finance": {
                  "type": "object",
                  "members": {
                    "account_type": {
                      "type": "array"
                    },
                    "transaction_type": {
                      "type": "array"
                    },
                    "currency": {
                      "type": "object",
                      "members": {
                        "UAE Dirham": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AED"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Afghani": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AFN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "؋"
                            }
                          }
                        },
                        "Lek": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ALL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Lek"
                            }
                          }
                        },
                        "Armenian Dram": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AMD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Netherlands Antillian Guilder": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ANG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "ƒ"
                            }
                          }
                        },
                        "Kwanza": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AOA"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Argentine Peso": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ARS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Australian Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AUD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Aruban Guilder": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AWG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "ƒ"
                            }
                          }
                        },
                        "Azerbaijanian Manat": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AZN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "ман"
                            }
                          }
                        },
                        "Convertible Marks": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BAM"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "KM"
                            }
                          }
                        },
                        "Barbados Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BBD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Taka": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BDT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Bulgarian Lev": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BGN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "лв"
                            }
                          }
                        },
                        "Bahraini Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BHD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Burundi Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BIF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Bermudian Dollar (customarily known as Bermuda Dollar)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BMD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Brunei Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BND"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Boliviano Mvdol": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BOB BOV"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$b"
                            }
                          }
                        },
                        "Brazilian Real": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BRL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "R$"
                            }
                          }
                        },
                        "Bahamian Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BSD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Pula": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BWP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "P"
                            }
                          }
                        },
                        "Belarussian Ruble": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BYR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "p."
                            }
                          }
                        },
                        "Belize Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BZD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "BZ$"
                            }
                          }
                        },
                        "Canadian Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CAD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Congolese Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CDF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Swiss Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CHF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "CHF"
                            }
                          }
                        },
                        "Chilean Peso Unidades de fomento": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CLP CLF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Yuan Renminbi": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CNY"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "¥"
                            }
                          }
                        },
                        "Colombian Peso Unidad de Valor Real": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "COP COU"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Costa Rican Colon": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CRC"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₡"
                            }
                          }
                        },
                        "Cuban Peso Peso Convertible": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CUP CUC"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₱"
                            }
                          }
                        },
                        "Cape Verde Escudo": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CVE"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Czech Koruna": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CZK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Kč"
                            }
                          }
                        },
                        "Djibouti Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "DJF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Danish Krone": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "DKK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kr"
                            }
                          }
                        },
                        "Dominican Peso": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "DOP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "RD$"
                            }
                          }
                        },
                        "Algerian Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "DZD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Kroon": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "EEK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Egyptian Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "EGP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Nakfa": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ERN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Ethiopian Birr": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ETB"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Euro": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "EUR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "€"
                            }
                          }
                        },
                        "Fiji Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "FJD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Falkland Islands Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "FKP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Pound Sterling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GBP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Lari": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GEL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Cedi": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GHS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Gibraltar Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GIP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Dalasi": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GMD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Guinea Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GNF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Quetzal": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GTQ"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Q"
                            }
                          }
                        },
                        "Guyana Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GYD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Hong Kong Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HKD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Lempira": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HNL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "L"
                            }
                          }
                        },
                        "Croatian Kuna": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HRK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kn"
                            }
                          }
                        },
                        "Gourde US Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HTG USD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Forint": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HUF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Ft"
                            }
                          }
                        },
                        "Rupiah": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "IDR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Rp"
                            }
                          }
                        },
                        "New Israeli Sheqel": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ILS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₪"
                            }
                          }
                        },
                        "Indian Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "INR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Indian Rupee Ngultrum": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "INR BTN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Iraqi Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "IQD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Iranian Rial": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "IRR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "Iceland Krona": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ISK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kr"
                            }
                          }
                        },
                        "Jamaican Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "JMD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "J$"
                            }
                          }
                        },
                        "Jordanian Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "JOD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Yen": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "JPY"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "¥"
                            }
                          }
                        },
                        "Kenyan Shilling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KES"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Som": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KGS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "лв"
                            }
                          }
                        },
                        "Riel": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KHR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "៛"
                            }
                          }
                        },
                        "Comoro Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KMF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "North Korean Won": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KPW"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₩"
                            }
                          }
                        },
                        "Won": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KRW"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₩"
                            }
                          }
                        },
                        "Kuwaiti Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KWD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Cayman Islands Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KYD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Tenge": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KZT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "лв"
                            }
                          }
                        },
                        "Kip": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LAK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₭"
                            }
                          }
                        },
                        "Lebanese Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LBP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Sri Lanka Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LKR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "Liberian Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LRD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Lithuanian Litas": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LTL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Lt"
                            }
                          }
                        },
                        "Latvian Lats": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LVL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Ls"
                            }
                          }
                        },
                        "Libyan Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LYD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Moroccan Dirham": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MAD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Moldovan Leu": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MDL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Malagasy Ariary": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MGA"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Denar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MKD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "ден"
                            }
                          }
                        },
                        "Kyat": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MMK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Tugrik": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MNT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₮"
                            }
                          }
                        },
                        "Pataca": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MOP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Ouguiya": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MRO"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Mauritius Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MUR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "Rufiyaa": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MVR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Kwacha": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MWK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Mexican Peso Mexican Unidad de Inversion (UDI)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MXN MXV"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Malaysian Ringgit": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MYR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "RM"
                            }
                          }
                        },
                        "Metical": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MZN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "MT"
                            }
                          }
                        },
                        "Naira": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NGN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₦"
                            }
                          }
                        },
                        "Cordoba Oro": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NIO"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "C$"
                            }
                          }
                        },
                        "Norwegian Krone": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NOK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kr"
                            }
                          }
                        },
                        "Nepalese Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NPR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "New Zealand Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NZD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Rial Omani": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "OMR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "Balboa US Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PAB USD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "B/."
                            }
                          }
                        },
                        "Nuevo Sol": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PEN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "S/."
                            }
                          }
                        },
                        "Kina": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PGK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Philippine Peso": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PHP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Php"
                            }
                          }
                        },
                        "Pakistan Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PKR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "Zloty": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PLN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "zł"
                            }
                          }
                        },
                        "Guarani": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PYG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Gs"
                            }
                          }
                        },
                        "Qatari Rial": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "QAR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "New Leu": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "RON"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "lei"
                            }
                          }
                        },
                        "Serbian Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "RSD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Дин."
                            }
                          }
                        },
                        "Russian Ruble": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "RUB"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "руб"
                            }
                          }
                        },
                        "Rwanda Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "RWF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Saudi Riyal": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SAR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "Solomon Islands Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SBD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Seychelles Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SCR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "Sudanese Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SDG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Swedish Krona": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SEK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kr"
                            }
                          }
                        },
                        "Singapore Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SGD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Saint Helena Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SHP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Leone": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SLL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Somali Shilling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SOS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "S"
                            }
                          }
                        },
                        "Surinam Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SRD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Dobra": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "STD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "El Salvador Colon US Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SVC USD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Syrian Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SYP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Lilangeni": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SZL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Baht": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "THB"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "฿"
                            }
                          }
                        },
                        "Somoni": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TJS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Manat": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TMT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Tunisian Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TND"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Pa'anga": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TOP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Turkish Lira": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TRY"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "TL"
                            }
                          }
                        },
                        "Trinidad and Tobago Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TTD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "TT$"
                            }
                          }
                        },
                        "New Taiwan Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TWD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "NT$"
                            }
                          }
                        },
                        "Tanzanian Shilling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TZS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Hryvnia": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "UAH"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₴"
                            }
                          }
                        },
                        "Uganda Shilling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "UGX"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "US Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "USD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Peso Uruguayo Uruguay Peso en Unidades Indexadas": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "UYU UYI"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$U"
                            }
                          }
                        },
                        "Uzbekistan Sum": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "UZS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "лв"
                            }
                          }
                        },
                        "Bolivar Fuerte": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "VEF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Bs"
                            }
                          }
                        },
                        "Dong": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "VND"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₫"
                            }
                          }
                        },
                        "Vatu": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "VUV"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Tala": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "WST"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "CFA Franc BEAC": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XAF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Silver": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XAG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Gold": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XAU"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Bond Markets Units European Composite Unit (EURCO)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XBA"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "European Monetary Unit (E.M.U.-6)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XBB"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "European Unit of Account 9(E.U.A.-9)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XBC"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "European Unit of Account 17(E.U.A.-17)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XBD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "East Caribbean Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XCD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "SDR": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XDR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "UIC-Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XFU"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "CFA Franc BCEAO": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XOF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Palladium": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XPD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "CFP Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XPF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Platinum": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XPT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Codes specifically reserved for testing purposes": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XTS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Yemeni Rial": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "YER"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "Rand": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZAR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "R"
                            }
                          }
                        },
                        "Rand Loti": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZAR LSL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Rand Namibia Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZAR NAD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Zambian Kwacha": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZMK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Zimbabwe Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZWL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "en_AU": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Australia (English)"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "state_abbr": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_BORK": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Bork (English)"
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_CA": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Canada (English)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_GB": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Great Britain (English)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "constant",
                      "value": "/[A-PR-UWYZ][A-HK-Y]?[0-9][ABEHMNPRVWXY0-9]? [0-9][ABD-HJLN-UW-Z]{2}/"
                    },
                    "county": {
                      "type": "array"
                    },
                    "uk_country": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_IND": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "India (English)"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_US": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "United States (English)"
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "default_country": {
                      "type": "array"
                    },
                    "postcode_by_state": {
                      "type": "object",
                      "members": {
                        "AL": {
                          "type": "constant",
                          "value": "350##"
                        },
                        "AK": {
                          "type": "constant",
                          "value": "995##"
                        },
                        "AS": {
                          "type": "constant",
                          "value": "967##"
                        },
                        "AZ": {
                          "type": "constant",
                          "value": "850##"
                        },
                        "AR": {
                          "type": "constant",
                          "value": "717##"
                        },
                        "CA": {
                          "type": "constant",
                          "value": "900##"
                        },
                        "CO": {
                          "type": "constant",
                          "value": "800##"
                        },
                        "CT": {
                          "type": "constant",
                          "value": "061##"
                        },
                        "DC": {
                          "type": "constant",
                          "value": "204##"
                        },
                        "DE": {
                          "type": "constant",
                          "value": "198##"
                        },
                        "FL": {
                          "type": "constant",
                          "value": "322##"
                        },
                        "GA": {
                          "type": "constant",
                          "value": "301##"
                        },
                        "HI": {
                          "type": "constant",
                          "value": "967##"
                        },
                        "ID": {
                          "type": "constant",
                          "value": "832##"
                        },
                        "IL": {
                          "type": "constant",
                          "value": "600##"
                        },
                        "IN": {
                          "type": "constant",
                          "value": "463##"
                        },
                        "IA": {
                          "type": "constant",
                          "value": "510##"
                        },
                        "KS": {
                          "type": "constant",
                          "value": "666##"
                        },
                        "KY": {
                          "type": "constant",
                          "value": "404##"
                        },
                        "LA": {
                          "type": "constant",
                          "value": "701##"
                        },
                        "ME": {
                          "type": "constant",
                          "value": "042##"
                        },
                        "MD": {
                          "type": "constant",
                          "value": "210##"
                        },
                        "MA": {
                          "type": "constant",
                          "value": "026##"
                        },
                        "MI": {
                          "type": "constant",
                          "value": "480##"
                        },
                        "MN": {
                          "type": "constant",
                          "value": "555##"
                        },
                        "MS": {
                          "type": "constant",
                          "value": "387##"
                        },
                        "MO": {
                          "type": "constant",
                          "value": "650##"
                        },
                        "MT": {
                          "type": "constant",
                          "value": "590##"
                        },
                        "NE": {
                          "type": "constant",
                          "value": "688##"
                        },
                        "NV": {
                          "type": "constant",
                          "value": "898##"
                        },
                        "NH": {
                          "type": "constant",
                          "value": "036##"
                        },
                        "NJ": {
                          "type": "constant",
                          "value": "076##"
                        },
                        "NM": {
                          "type": "constant",
                          "value": "880##"
                        },
                        "NY": {
                          "type": "constant",
                          "value": "122##"
                        },
                        "NC": {
                          "type": "constant",
                          "value": "288##"
                        },
                        "ND": {
                          "type": "constant",
                          "value": "586##"
                        },
                        "OH": {
                          "type": "constant",
                          "value": "444##"
                        },
                        "OK": {
                          "type": "constant",
                          "value": "730##"
                        },
                        "OR": {
                          "type": "constant",
                          "value": "979##"
                        },
                        "PA": {
                          "type": "constant",
                          "value": "186##"
                        },
                        "RI": {
                          "type": "constant",
                          "value": "029##"
                        },
                        "SC": {
                          "type": "constant",
                          "value": "299##"
                        },
                        "SD": {
                          "type": "constant",
                          "value": "577##"
                        },
                        "TN": {
                          "type": "constant",
                          "value": "383##"
                        },
                        "TX": {
                          "type": "constant",
                          "value": "798##"
                        },
                        "UT": {
                          "type": "constant",
                          "value": "847##"
                        },
                        "VT": {
                          "type": "constant",
                          "value": "050##"
                        },
                        "VA": {
                          "type": "constant",
                          "value": "222##"
                        },
                        "WA": {
                          "type": "constant",
                          "value": "990##"
                        },
                        "WV": {
                          "type": "constant",
                          "value": "247##"
                        },
                        "WI": {
                          "type": "constant",
                          "value": "549##"
                        },
                        "WY": {
                          "type": "constant",
                          "value": "831##"
                        }
                      }
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "area_code": {
                      "type": "array"
                    },
                    "exchange_code": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_au_ocker": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Australia Ocker (English)"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "ocker_first_name": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "street_root": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "city_prefix": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "region": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "es": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Spanish"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "province": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "time_zone": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "fa": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Farsi"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "fr": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "French"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "building_number": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "it": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Italian"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "ja": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Japanese"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "last_name": {
                      "type": "array"
                    },
                    "first_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "ko": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Korean"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "last_name": {
                      "type": "array"
                    },
                    "first_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "nb_NO": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Norwegian"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_root": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "common_street_suffix": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "feminine_name": {
                      "type": "array"
                    },
                    "masculine_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "nep": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Nepalese"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "nl": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Dutch"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "tussenvoegsel": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "pl": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Polish"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjetive": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "pt_BR": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Portuguese (Brazil)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "ru": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Russian"
                },
                "separator": {
                  "type": "constant",
                  "value": " и "
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "street_title": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "male_first_name": {
                      "type": "array"
                    },
                    "male_middle_name": {
                      "type": "array"
                    },
                    "male_last_name": {
                      "type": "array"
                    },
                    "female_first_name": {
                      "type": "array"
                    },
                    "female_middle_name": {
                      "type": "array"
                    },
                    "female_last_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "commerce": {
                  "type": "object",
                  "members": {
                    "color": {
                      "type": "array"
                    },
                    "department": {
                      "type": "array"
                    },
                    "product_name": {
                      "type": "object",
                      "members": {
                        "adjective": {
                          "type": "array"
                        },
                        "material": {
                          "type": "array"
                        },
                        "product": {
                          "type": "array"
                        }
                      }
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "sk": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Slovakian"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "time_zone": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "man_first_name": {
                      "type": "array"
                    },
                    "woman_first_name": {
                      "type": "array"
                    },
                    "man_last_name": {
                      "type": "array"
                    },
                    "woman_last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "sv": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Swedish"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "common_street_suffix": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name_women": {
                      "type": "array"
                    },
                    "first_name_men": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "common_cell_prefix": {
                      "type": "array"
                    },
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "commerce": {
                  "type": "object",
                  "members": {
                    "color": {
                      "type": "array"
                    },
                    "department": {
                      "type": "array"
                    },
                    "product_name": {
                      "type": "object",
                      "members": {
                        "adjective": {
                          "type": "array"
                        },
                        "material": {
                          "type": "array"
                        },
                        "product": {
                          "type": "array"
                        }
                      }
                    }
                  }
                },
                "team": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "vi": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Vietnamese"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_root": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "constant",
                      "value": "/[A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}/"
                    },
                    "county": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "zh_CN": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Chinese"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            }
          }
        },
        "locale": {
          "type": "constant",
          "value": "en"
        },
        "localeFallback": {
          "type": "constant",
          "value": "en"
        },
        "definitions": {
          "type": "object",
          "members": {
            "name": {
              "type": "object"
            },
            "address": {
              "type": "object"
            },
            "company": {
              "type": "object"
            },
            "lorem": {
              "type": "object"
            },
            "hacker": {
              "type": "object"
            },
            "phone_number": {
              "type": "object"
            },
            "finance": {
              "type": "object"
            },
            "internet": {
              "type": "object"
            }
          }
        }
      }
    }
  },
  "dburles:mongo-collection-instances": {},
  "msavin:mongol": {},
  "mongo-livedata": {},
  "meteorhacks:meteorx": {
    "MeteorX": {
      "type": "object",
      "members": {
        "onReady": {
          "type": "function"
        },
        "Server": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onConnection": {
                  "type": "function"
                },
                "publish": {
                  "type": "function"
                },
                "methods": {
                  "type": "function"
                },
                "call": {
                  "type": "function"
                },
                "apply": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Session": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "sendReady": {
                  "type": "function"
                },
                "sendAdded": {
                  "type": "function"
                },
                "sendChanged": {
                  "type": "function"
                },
                "sendRemoved": {
                  "type": "function"
                },
                "getSendCallbacks": {
                  "type": "function"
                },
                "getCollectionView": {
                  "type": "function"
                },
                "added": {
                  "type": "function"
                },
                "removed": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "startUniversalSubs": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "send": {
                  "type": "function"
                },
                "sendError": {
                  "type": "function"
                },
                "processMessage": {
                  "type": "function"
                },
                "protocol_handlers": {
                  "type": "object",
                  "members": {
                    "sub": {
                      "type": "function"
                    },
                    "unsub": {
                      "type": "function"
                    },
                    "method": {
                      "type": "function"
                    }
                  }
                }
              }
            }
          }
        },
        "Subscription": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "error": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "added": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "removed": {
                  "type": "function"
                },
                "ready": {
                  "type": "function"
                }
              }
            }
          }
        },
        "SessionCollectionView": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "isEmpty": {
                  "type": "function"
                },
                "diff": {
                  "type": "function"
                },
                "diffDocument": {
                  "type": "function"
                },
                "added": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "removed": {
                  "type": "function"
                }
              }
            }
          }
        },
        "SessionDocumentView": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getFields": {
                  "type": "function"
                },
                "clearField": {
                  "type": "function"
                },
                "changeField": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MongoConnection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "close": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "dropCollection": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "tail": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MongoCursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "forEach": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "fetch": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "rewind": {
                  "type": "function"
                },
                "getTransform": {
                  "type": "function"
                },
                "observe": {
                  "type": "function"
                },
                "observeChanges": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MongoOplogDriver": {
          "type": "function",
          "members": {
            "cursorSupported": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MongoPollingDriver": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Multiplexer": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "addHandleAndSendInitialAdds": {
                  "type": "function"
                },
                "removeHandle": {
                  "type": "function"
                },
                "ready": {
                  "type": "function"
                },
                "onFlush": {
                  "type": "function"
                },
                "callbackNames": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "livedata": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "undefined"
    }
  },
  "url": {
    "URL": {
      "type": "object"
    }
  },
  "http": {
    "HTTP": {
      "type": "object",
      "members": {
        "get": {
          "type": "function"
        },
        "post": {
          "type": "function"
        },
        "put": {
          "type": "function"
        },
        "del": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "methodsMaxDataLength": {
          "type": "constant",
          "value": 5242880
        },
        "methods": {
          "type": "function"
        },
        "publishFormats": {
          "type": "function"
        },
        "publish": {
          "type": "function"
        },
        "unpublish": {
          "type": "function"
        }
      }
    }
  },
  "email": {
    "Email": {
      "type": "object",
      "members": {
        "send": {
          "type": "function"
        }
      }
    },
    "EmailTest": {
      "type": "object",
      "members": {
        "overrideOutputStream": {
          "type": "function"
        },
        "restoreOutputStream": {
          "type": "function"
        },
        "hookSend": {
          "type": "function"
        }
      }
    }
  },
  "meteorhacks:kadira": {
    "Kadira": {
      "type": "object",
      "members": {
        "options": {
          "type": "object",
          "members": {
            "appId": {
              "type": "constant",
              "value": "hzKYxH6FyL4g9SM5v"
            },
            "appSecret": {
              "type": "constant",
              "value": "531de270-f860-4f5f-aeb2-15e785cb0731"
            },
            "payloadTimeout": {
              "type": "constant",
              "value": 20000
            },
            "endpoint": {
              "type": "constant",
              "value": "https://engine.kadira.io"
            },
            "clientEngineSyncDelay": {
              "type": "constant",
              "value": 10000
            },
            "thresholds": {
              "type": "object"
            },
            "hostname": {
              "type": "constant",
              "value": "MacBook-de-Emmanuel-Ernest.local"
            },
            "proxy": {
              "type": "null",
              "value": null
            },
            "authHeaders": {
              "type": "object",
              "members": {
                "KADIRA-APP-ID": {
                  "type": "constant",
                  "value": "hzKYxH6FyL4g9SM5v"
                },
                "KADIRA-APP-SECRET": {
                  "type": "constant",
                  "value": "531de270-f860-4f5f-aeb2-15e785cb0731"
                },
                "Content-Type": {
                  "type": "constant",
                  "value": "application/json"
                }
              }
            }
          }
        },
        "Jobs": {
          "type": "object",
          "members": {
            "getAsync": {
              "type": "function"
            },
            "setAsync": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            }
          }
        },
        "models": {
          "type": "object",
          "members": {
            "methods": {
              "type": "object",
              "members": {
                "methodMetricsByMinute": {
                  "type": "object"
                },
                "errorMap": {
                  "type": "object"
                },
                "maxEventTimesForMethods": {
                  "type": "object"
                },
                "tracerStore": {
                  "type": "object",
                  "members": {
                    "maxTotalPoints": {
                      "type": "constant",
                      "value": 30
                    },
                    "interval": {
                      "type": "constant",
                      "value": 60000
                    },
                    "archiveEvery": {
                      "type": "constant",
                      "value": 5
                    },
                    "maxTotals": {
                      "type": "object"
                    },
                    "currentMaxTrace": {
                      "type": "object"
                    },
                    "traceArchive": {
                      "type": "array"
                    },
                    "processedCnt": {
                      "type": "object"
                    },
                    "errorMap": {
                      "type": "object"
                    },
                    "addTrace": {
                      "type": "function",
                      "refID": 24
                    },
                    "collectTraces": {
                      "type": "function",
                      "refID": 26
                    },
                    "start": {
                      "type": "function",
                      "refID": 28
                    },
                    "stop": {
                      "type": "function",
                      "refID": 30
                    },
                    "processTraces": {
                      "type": "function",
                      "refID": 32
                    }
                  }
                },
                "processMethod": {
                  "type": "function"
                },
                "buildPayload": {
                  "type": "function"
                }
              }
            },
            "pubsub": {
              "type": "object",
              "members": {
                "metricsByMinute": {
                  "type": "object",
                  "members": {
                    "1426286280000": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1426286328141
                        },
                        "pubs": {
                          "type": "object",
                          "members": {
                            "null(autopublish)": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "meteor_autoupdate_clientVersions": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 240
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "VelocityTestFiles": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 348
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "VelocityFixtureFiles": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 867
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "VelocityTestReports": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 931
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "VelocityAggregateReports": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 958
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "VelocityLogs": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 968
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "VelocityMirrors": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 982
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            },
                            "lastFiftyRooms": {
                              "type": "object",
                              "members": {
                                "subs": {
                                  "type": "constant",
                                  "value": 1
                                },
                                "unsubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "resTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeSubs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "activeDocs": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "lifeTime": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "totalObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "cachedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "createdObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "deletedObservers": {
                                  "type": "constant",
                                  "value": 0
                                },
                                "errors": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "subscriptions": {
                  "type": "object",
                  "members": {
                    "LF4MKATnwsxSHbRKR": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1426286328762
                        },
                        "publication": {
                          "type": "constant",
                          "value": "meteor_autoupdate_clientVersions"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "LF4MKATnwsxSHbRKR"
                        }
                      }
                    },
                    "zqfaDgqkQaeRv3Dcp": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1426286328770
                        },
                        "publication": {
                          "type": "constant",
                          "value": "VelocityTestFiles"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "zqfaDgqkQaeRv3Dcp"
                        }
                      }
                    },
                    "L6iJmKi5PjHTAAe6r": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1426286328770
                        },
                        "publication": {
                          "type": "constant",
                          "value": "VelocityFixtureFiles"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "L6iJmKi5PjHTAAe6r"
                        }
                      }
                    },
                    "oZBYfB8xSoR5K93EK": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1426286328770
                        },
                        "publication": {
                          "type": "constant",
                          "value": "VelocityTestReports"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "oZBYfB8xSoR5K93EK"
                        }
                      }
                    },
                    "sLu33oKpisB3ZiuBv": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1426286328772
                        },
                        "publication": {
                          "type": "constant",
                          "value": "VelocityAggregateReports"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "sLu33oKpisB3ZiuBv"
                        }
                      }
                    },
                    "bHKaHsvevqSKLou65": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1426286328772
                        },
                        "publication": {
                          "type": "constant",
                          "value": "VelocityLogs"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "bHKaHsvevqSKLou65"
                        }
                      }
                    },
                    "NJXMmgL62rGnpGt6k": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1426286328773
                        },
                        "publication": {
                          "type": "constant",
                          "value": "VelocityMirrors"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "NJXMmgL62rGnpGt6k"
                        }
                      }
                    },
                    "2TP7qjjSGkN7Mai4o": {
                      "type": "object",
                      "members": {
                        "startTime": {
                          "type": "constant",
                          "value": 1426286328773
                        },
                        "publication": {
                          "type": "constant",
                          "value": "lastFiftyRooms"
                        },
                        "params": {
                          "type": "array"
                        },
                        "id": {
                          "type": "constant",
                          "value": "2TP7qjjSGkN7Mai4o"
                        }
                      }
                    }
                  }
                },
                "tracerStore": {
                  "type": "object",
                  "members": {
                    "maxTotalPoints": {
                      "type": "constant",
                      "value": 30
                    },
                    "interval": {
                      "type": "constant",
                      "value": 60000
                    },
                    "archiveEvery": {
                      "type": "constant",
                      "value": 5
                    },
                    "maxTotals": {
                      "type": "object"
                    },
                    "currentMaxTrace": {
                      "type": "object",
                      "members": {
                        "sub::meteor_autoupdate_clientVersions": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "deqHMPqP3WmiZNK4W"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "LF4MKATnwsxSHbRKR"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "meteor_autoupdate_clientVersions"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1426286328762
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 239
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 3
                                },
                                "async": {
                                  "type": "constant",
                                  "value": 213
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 23
                                }
                              }
                            }
                          }
                        },
                        "sub::VelocityTestFiles": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "deqHMPqP3WmiZNK4W"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "zqfaDgqkQaeRv3Dcp"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "VelocityTestFiles"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1426286328770
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 345
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 236
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 109
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::VelocityFixtureFiles": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "deqHMPqP3WmiZNK4W"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "L6iJmKi5PjHTAAe6r"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "VelocityFixtureFiles"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1426286328770
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 867
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 351
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 515
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 1
                                }
                              }
                            }
                          }
                        },
                        "sub::VelocityTestReports": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "deqHMPqP3WmiZNK4W"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "oZBYfB8xSoR5K93EK"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "VelocityTestReports"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1426286328770
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 931
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 868
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 63
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 0
                                }
                              }
                            }
                          }
                        },
                        "sub::VelocityAggregateReports": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "deqHMPqP3WmiZNK4W"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "sLu33oKpisB3ZiuBv"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "VelocityAggregateReports"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1426286328772
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 958
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 931
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 24
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 3
                                }
                              }
                            }
                          }
                        },
                        "sub::VelocityLogs": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "deqHMPqP3WmiZNK4W"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "bHKaHsvevqSKLou65"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "VelocityLogs"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1426286328772
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 968
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 958
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 9
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 1
                                }
                              }
                            }
                          }
                        },
                        "sub::VelocityMirrors": {
                          "type": "object",
                          "members": {
                            "session": {
                              "type": "constant",
                              "value": "deqHMPqP3WmiZNK4W"
                            },
                            "userId": {
                              "type": "null",
                              "value": null
                            },
                            "id": {
                              "type": "constant",
                              "value": "NJXMmgL62rGnpGt6k"
                            },
                            "events": {
                              "type": "array"
                            },
                            "type": {
                              "type": "constant",
                              "value": "sub"
                            },
                            "name": {
                              "type": "constant",
                              "value": "VelocityMirrors"
                            },
                            "at": {
                              "type": "constant",
                              "value": 1426286328773
                            },
                            "metrics": {
                              "type": "object",
                              "members": {
                                "total": {
                                  "type": "constant",
                                  "value": 981
                                },
                                "wait": {
                                  "type": "constant",
                                  "value": 968
                                },
                                "db": {
                                  "type": "constant",
                                  "value": 12
                                },
                                "compute": {
                                  "type": "constant",
                                  "value": 1
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "traceArchive": {
                      "type": "array"
                    },
                    "processedCnt": {
                      "type": "object"
                    },
                    "errorMap": {
                      "type": "object"
                    },
                    "addTrace": {
                      "ref": 24
                    },
                    "collectTraces": {
                      "ref": 26
                    },
                    "start": {
                      "ref": 28
                    },
                    "stop": {
                      "ref": 30
                    },
                    "processTraces": {
                      "ref": 32
                    }
                  }
                },
                "buildPayload": {
                  "type": "function"
                },
                "incrementHandleCount": {
                  "type": "function"
                },
                "trackCreatedObserver": {
                  "type": "function"
                },
                "trackDeletedObserver": {
                  "type": "function"
                }
              }
            },
            "system": {
              "type": "object",
              "members": {
                "startTime": {
                  "type": "constant",
                  "value": 1426286328131
                },
                "newSessions": {
                  "type": "constant",
                  "value": 0
                },
                "sessionTimeout": {
                  "type": "constant",
                  "value": 1800000
                },
                "usageLookup": {
                  "type": "function"
                },
                "buildPayload": {
                  "type": "function"
                },
                "getUsage": {
                  "type": "function"
                },
                "handleSessionActivity": {
                  "type": "function"
                },
                "countNewSession": {
                  "type": "function"
                },
                "isSessionActive": {
                  "type": "function"
                }
              }
            },
            "error": {
              "type": "object",
              "refID": 116,
              "members": {
                "appId": {
                  "type": "constant",
                  "value": "hzKYxH6FyL4g9SM5v"
                },
                "errors": {
                  "type": "object"
                },
                "startTime": {
                  "type": "constant",
                  "value": 1426286328131
                },
                "maxErrors": {
                  "type": "constant",
                  "value": 10
                },
                "addFilter": {
                  "type": "function"
                },
                "removeFilter": {
                  "type": "function"
                },
                "applyFilters": {
                  "type": "function"
                },
                "buildPayload": {
                  "type": "function"
                },
                "errorCount": {
                  "type": "function"
                },
                "trackError": {
                  "type": "function"
                }
              }
            }
          }
        },
        "env": {
          "type": "object",
          "members": {
            "currentSub": {
              "type": "null",
              "value": null
            },
            "kadiraInfo": {
              "type": "object",
              "members": {
                "slot": {
                  "type": "constant",
                  "value": 4
                },
                "get": {
                  "type": "function"
                },
                "getOrNullIfOutsideFiber": {
                  "type": "function"
                },
                "withValue": {
                  "type": "function"
                }
              }
            }
          }
        },
        "waitTimeBuilder": {
          "type": "object",
          "members": {
            "register": {
              "type": "function"
            },
            "build": {
              "type": "function"
            },
            "trackWaitTime": {
              "type": "function"
            }
          }
        },
        "errors": {
          "ref": 116
        },
        "connect": {
          "type": "function"
        },
        "authCheckFailures": {
          "type": "constant",
          "value": 0
        },
        "enableErrorTracking": {
          "type": "function"
        },
        "disableErrorTracking": {
          "type": "function"
        },
        "trackError": {
          "type": "function"
        },
        "ignoreErrorTracking": {
          "type": "function"
        },
        "checkWhyNoOplog": {
          "type": "function"
        },
        "tracer": {
          "type": "object",
          "members": {
            "start": {
              "type": "function",
              "refID": 158
            },
            "event": {
              "type": "function",
              "refID": 160
            },
            "eventEnd": {
              "type": "function",
              "refID": 162
            },
            "getLastEvent": {
              "type": "function",
              "refID": 164
            },
            "endLastEvent": {
              "type": "function",
              "refID": 166
            },
            "buildTrace": {
              "type": "function",
              "refID": 168
            },
            "addFilter": {
              "type": "function",
              "refID": 170
            }
          }
        },
        "Tracer": {
          "type": "function",
          "members": {
            "stripSensitive": {
              "type": "function"
            },
            "stripSelectors": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "start": {
                  "ref": 158
                },
                "event": {
                  "ref": 160
                },
                "eventEnd": {
                  "ref": 162
                },
                "getLastEvent": {
                  "ref": 164
                },
                "endLastEvent": {
                  "ref": 166
                },
                "buildTrace": {
                  "ref": 168
                },
                "addFilter": {
                  "ref": 170
                }
              }
            }
          }
        },
        "errorFilters": {
          "type": "object",
          "members": {
            "filterValidationErrors": {
              "type": "function"
            },
            "filterCommonMeteorErrors": {
              "type": "function"
            }
          }
        },
        "send": {
          "type": "function"
        },
        "syncedDate": {
          "type": "object",
          "members": {
            "endpoint": {
              "type": "constant",
              "value": "https://engine.kadira.io/simplentp/sync"
            },
            "diff": {
              "type": "constant",
              "value": 360.5
            },
            "reSyncCount": {
              "type": "constant",
              "value": 1
            },
            "reSync": {
              "type": "object",
              "members": {
                "baseTimeout": {
                  "type": "constant",
                  "value": 60000
                },
                "maxTimeout": {
                  "type": "constant",
                  "value": 600000
                },
                "minCount": {
                  "type": "constant",
                  "value": 0
                },
                "exponent": {
                  "type": "constant",
                  "value": 2.2
                },
                "minTimeout": {
                  "type": "constant",
                  "value": 10
                },
                "fuzz": {
                  "type": "constant",
                  "value": 0.5
                },
                "retryTimer": {
                  "type": "object",
                  "members": {
                    "unref": {
                      "type": "function"
                    },
                    "ref": {
                      "type": "function"
                    },
                    "close": {
                      "type": "function"
                    }
                  }
                },
                "clear": {
                  "type": "function"
                },
                "retryLater": {
                  "type": "function"
                }
              }
            },
            "setEndpoint": {
              "type": "function"
            },
            "getTime": {
              "type": "function"
            },
            "syncTime": {
              "type": "function"
            },
            "sync": {
              "type": "function"
            },
            "getServerTime": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "practicalmeteor:loglevel": {
    "loglevel": {
      "type": "object",
      "members": {
        "createLogger": {
          "type": "function"
        },
        "createPackageLogger": {
          "type": "function"
        },
        "createAppLogger": {
          "type": "function"
        }
      }
    }
  },
  "velocity:core": {
    "Velocity": {
      "type": "object",
      "members": {
        "startup": {
          "type": "function"
        },
        "getAppPath": {
          "type": "function"
        },
        "getTestsPath": {
          "type": "function"
        },
        "postProcessors": {
          "type": "array"
        },
        "addPostProcessor": {
          "type": "function"
        },
        "getReportGithubIssueMessage": {
          "type": "function"
        },
        "registerTestingFramework": {
          "type": "function"
        },
        "onTest": {
          "type": "function"
        },
        "Mirror": {
          "type": "object",
          "members": {
            "start": {
              "type": "function"
            }
          }
        },
        "ProxyPackageSync": {
          "type": "object",
          "members": {
            "regeneratePackageJs": {
              "type": "function"
            }
          }
        }
      }
    },
    "VelocityTestFiles": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 43
                },
                "findOne": {
                  "type": "function",
                  "refID": 45
                },
                "insert": {
                  "type": "function",
                  "refID": 47
                },
                "update": {
                  "type": "function",
                  "refID": 49
                },
                "remove": {
                  "type": "function",
                  "refID": 51
                },
                "upsert": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                }
              }
            }
          }
        },
        "find": {
          "ref": 43
        },
        "findOne": {
          "ref": 45
        },
        "insert": {
          "ref": 47
        },
        "update": {
          "ref": 49
        },
        "remove": {
          "ref": 51
        },
        "upsert": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        }
      }
    },
    "VelocityFixtureFiles": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 43
                },
                "findOne": {
                  "type": "function",
                  "refID": 45
                },
                "insert": {
                  "type": "function",
                  "refID": 47
                },
                "update": {
                  "type": "function",
                  "refID": 49
                },
                "remove": {
                  "type": "function",
                  "refID": 51
                },
                "upsert": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                }
              }
            }
          }
        },
        "find": {
          "ref": 43
        },
        "findOne": {
          "ref": 45
        },
        "insert": {
          "ref": 47
        },
        "update": {
          "ref": 49
        },
        "remove": {
          "ref": 51
        },
        "upsert": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        }
      }
    },
    "VelocityTestReports": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 43
                },
                "findOne": {
                  "type": "function",
                  "refID": 45
                },
                "insert": {
                  "type": "function",
                  "refID": 47
                },
                "update": {
                  "type": "function",
                  "refID": 49
                },
                "remove": {
                  "type": "function",
                  "refID": 51
                },
                "upsert": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                }
              }
            }
          }
        },
        "find": {
          "ref": 43
        },
        "findOne": {
          "ref": 45
        },
        "insert": {
          "ref": 47
        },
        "update": {
          "ref": 49
        },
        "remove": {
          "ref": 51
        },
        "upsert": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        }
      }
    },
    "VelocityAggregateReports": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 43
                },
                "findOne": {
                  "type": "function",
                  "refID": 45
                },
                "insert": {
                  "type": "function",
                  "refID": 47
                },
                "update": {
                  "type": "function",
                  "refID": 49
                },
                "remove": {
                  "type": "function",
                  "refID": 51
                },
                "upsert": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                }
              }
            }
          }
        },
        "find": {
          "ref": 43
        },
        "findOne": {
          "ref": 45
        },
        "insert": {
          "ref": 47
        },
        "update": {
          "ref": 49
        },
        "remove": {
          "ref": 51
        },
        "upsert": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        }
      }
    },
    "VelocityLogs": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 43
                },
                "findOne": {
                  "type": "function",
                  "refID": 45
                },
                "insert": {
                  "type": "function",
                  "refID": 47
                },
                "update": {
                  "type": "function",
                  "refID": 49
                },
                "remove": {
                  "type": "function",
                  "refID": 51
                },
                "upsert": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                }
              }
            }
          }
        },
        "find": {
          "ref": 43
        },
        "findOne": {
          "ref": 45
        },
        "insert": {
          "ref": 47
        },
        "update": {
          "ref": 49
        },
        "remove": {
          "ref": 51
        },
        "upsert": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        }
      }
    },
    "VelocityMirrors": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "future": {
              "type": "function"
            },
            "deprecate": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 43
                },
                "findOne": {
                  "type": "function",
                  "refID": 45
                },
                "insert": {
                  "type": "function",
                  "refID": 47
                },
                "update": {
                  "type": "function",
                  "refID": 49
                },
                "remove": {
                  "type": "function",
                  "refID": 51
                },
                "upsert": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                }
              }
            }
          }
        },
        "find": {
          "ref": 43
        },
        "findOne": {
          "ref": 45
        },
        "insert": {
          "ref": 47
        },
        "update": {
          "ref": 49
        },
        "remove": {
          "ref": 51
        },
        "upsert": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        }
      }
    }
  },
  "velocity:shim": {},
  "velocity:meteor-stubs": {
    "MeteorStubs": {
      "type": "object",
      "members": {
        "install": {
          "type": "function"
        },
        "uninstall": {
          "type": "function"
        }
      }
    }
  },
  "alanning:package-stubber": {
    "PackageStubber": {
      "type": "object",
      "members": {
        "functionReplacementStr": {
          "type": "constant",
          "value": "function emptyFn () {}"
        },
        "validate": {
          "type": "object",
          "members": {
            "stubPackages": {
              "type": "function"
            },
            "deepCopyReplaceFn": {
              "type": "function"
            }
          }
        },
        "stubPackages": {
          "type": "function"
        },
        "listTestPackages": {
          "type": "function"
        },
        "listPackages": {
          "type": "function"
        },
        "listPackageExports": {
          "type": "function"
        },
        "deepCopyReplaceFn": {
          "type": "function"
        },
        "shouldIgnorePackage": {
          "type": "function"
        },
        "replaceFnPlaceholders": {
          "type": "function"
        },
        "stubGenerators": {
          "type": "object",
          "members": {
            "function": {
              "type": "function"
            },
            "object": {
              "type": "function"
            },
            "string": {
              "type": "function"
            },
            "number": {
              "type": "function"
            },
            "undefined": {
              "type": "function"
            }
          }
        },
        "generateStubJsCode": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:karma": {
    "Karma": {
      "type": "object",
      "members": {
        "start": {
          "type": "function"
        },
        "setConfig": {
          "type": "function"
        }
      }
    },
    "KarmaInternals": {
      "type": "object",
      "members": {
        "karmaChilds": {
          "type": "object",
          "members": {
            "jasmine-client-unit": {
              "type": "object",
              "members": {
                "taskName": {
                  "type": "constant",
                  "value": "jasmine-client-unit"
                },
                "appPath": {
                  "type": "constant",
                  "value": "/Users/emmanuelernest/GitHub/airpet"
                },
                "pid": {
                  "type": "constant",
                  "value": 964
                },
                "fout": {
                  "type": "constant",
                  "value": 42
                },
                "child": {
                  "type": "object",
                  "members": {
                    "domain": {
                      "type": "null",
                      "value": null
                    },
                    "signalCode": {
                      "type": "null",
                      "value": null
                    },
                    "exitCode": {
                      "type": "null",
                      "value": null
                    },
                    "pid": {
                      "type": "constant",
                      "value": 964
                    },
                    "stdin": {
                      "type": "null",
                      "value": null
                    },
                    "stdout": {
                      "type": "null",
                      "value": null
                    },
                    "stderr": {
                      "type": "null",
                      "value": null
                    },
                    "stdio": {
                      "type": "array"
                    },
                    "spawn": {
                      "type": "function"
                    },
                    "kill": {
                      "type": "function"
                    },
                    "ref": {
                      "type": "function"
                    },
                    "unref": {
                      "type": "function"
                    },
                    "setMaxListeners": {
                      "type": "function"
                    },
                    "emit": {
                      "type": "function"
                    },
                    "addListener": {
                      "type": "function",
                      "refID": 17
                    },
                    "on": {
                      "ref": 17
                    },
                    "once": {
                      "type": "function"
                    },
                    "removeListener": {
                      "type": "function"
                    },
                    "removeAllListeners": {
                      "type": "function"
                    },
                    "listeners": {
                      "type": "function"
                    }
                  }
                },
                "getTaskName": {
                  "type": "function"
                },
                "getChild": {
                  "type": "function"
                },
                "getPid": {
                  "type": "function"
                },
                "isDead": {
                  "type": "function"
                },
                "isRunning": {
                  "type": "function"
                },
                "readPid": {
                  "type": "function"
                },
                "spawn": {
                  "type": "function"
                },
                "kill": {
                  "type": "function"
                }
              }
            }
          }
        },
        "getKarmaChild": {
          "type": "function"
        },
        "setKarmaChild": {
          "type": "function"
        },
        "startKarmaServer": {
          "type": "function"
        },
        "writeKarmaConfig": {
          "type": "function"
        },
        "generateKarmaConfig": {
          "type": "function"
        },
        "readKarmaConfig": {
          "type": "function"
        },
        "getConfigPath": {
          "type": "function"
        },
        "getAppPath": {
          "type": "function"
        },
        "getKarmaPath": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:jasmine": {
    "Jasmine": {
      "type": "object",
      "members": {
        "onTest": {
          "type": "function"
        }
      }
    }
  },
  "velocity:html-reporter": {},
  "cfs:standard-packages": {},
  "cfs:base-package": {
    "FS": {
      "type": "object",
      "members": {
        "Store": {
          "type": "object",
          "members": {
            "GridFS": {
              "type": "function"
            },
            "FileSystem": {
              "type": "function"
            },
            "S3": {
              "type": "function"
            }
          }
        },
        "AccessPoint": {
          "type": "object"
        },
        "Utility": {
          "type": "object",
          "members": {
            "cloneFileRecord": {
              "type": "function"
            },
            "defaultCallback": {
              "type": "function"
            },
            "handleError": {
              "type": "function"
            },
            "noop": {
              "type": "function"
            },
            "validateAction": {
              "type": "function"
            },
            "getFileName": {
              "type": "function"
            },
            "getFileExtension": {
              "type": "function"
            },
            "setFileExtension": {
              "type": "function"
            },
            "encodeParams": {
              "type": "function"
            },
            "encodeString": {
              "type": "function"
            },
            "btoa": {
              "type": "function"
            },
            "atob": {
              "type": "function"
            },
            "extend": {
              "type": "function"
            },
            "each": {
              "type": "function"
            },
            "isEmpty": {
              "type": "function"
            },
            "indexOf": {
              "type": "function"
            },
            "isArray": {
              "type": "function"
            },
            "map": {
              "type": "function"
            },
            "once": {
              "type": "function"
            },
            "include": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "binaryToBuffer": {
              "type": "function"
            },
            "bufferToBinary": {
              "type": "function"
            },
            "safeCallback": {
              "type": "function"
            },
            "safeStream": {
              "type": "function"
            }
          }
        },
        "config": {
          "type": "object"
        },
        "StorageAdapter": {
          "type": "function",
          "members": {
            "super_": {
              "type": "function",
              "members": {
                "listenerCount": {
                  "type": "function"
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "setMaxListeners": {
                      "type": "function",
                      "refID": 65
                    },
                    "emit": {
                      "type": "function",
                      "refID": 67
                    },
                    "addListener": {
                      "type": "function",
                      "refID": 69
                    },
                    "on": {
                      "ref": 69
                    },
                    "once": {
                      "type": "function",
                      "refID": 71
                    },
                    "removeListener": {
                      "type": "function",
                      "refID": 73
                    },
                    "removeAllListeners": {
                      "type": "function",
                      "refID": 75
                    },
                    "listeners": {
                      "type": "function",
                      "refID": 77
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "setMaxListeners": {
                  "ref": 65
                },
                "emit": {
                  "ref": 67
                },
                "addListener": {
                  "ref": 69
                },
                "on": {
                  "ref": 69
                },
                "once": {
                  "ref": 71
                },
                "removeListener": {
                  "ref": 73
                },
                "removeAllListeners": {
                  "ref": 75
                },
                "listeners": {
                  "ref": 77
                }
              }
            }
          }
        },
        "Transform": {
          "type": "function",
          "members": {
            "scope": {
              "type": "object",
              "members": {
                "gm": {
                  "type": "function"
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "createWriteStream": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                }
              }
            }
          }
        },
        "File": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "domain": {
                  "type": "null",
                  "value": null
                },
                "attachData": {
                  "type": "function"
                },
                "uploadProgress": {
                  "type": "function"
                },
                "controlledByDeps": {
                  "type": "function"
                },
                "getCollection": {
                  "type": "function",
                  "refID": 97
                },
                "isMounted": {
                  "ref": 97
                },
                "getFileRecord": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "getExtension": {
                  "type": "function"
                },
                "isImage": {
                  "type": "function"
                },
                "isVideo": {
                  "type": "function"
                },
                "isAudio": {
                  "type": "function"
                },
                "formattedSize": {
                  "type": "function"
                },
                "isUploaded": {
                  "type": "function"
                },
                "hasStored": {
                  "type": "function",
                  "refID": 117
                },
                "hasCopy": {
                  "ref": 117
                },
                "getCopyInfo": {
                  "type": "function"
                },
                "name": {
                  "type": "function"
                },
                "extension": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                },
                "updatedAt": {
                  "type": "function"
                },
                "logCopyFailure": {
                  "type": "function"
                },
                "failedPermanently": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "createWriteStream": {
                  "type": "function"
                },
                "copy": {
                  "type": "function"
                },
                "url": {
                  "type": "function"
                },
                "setMaxListeners": {
                  "ref": 65
                },
                "emit": {
                  "ref": 67
                },
                "addListener": {
                  "ref": 69
                },
                "on": {
                  "ref": 69
                },
                "once": {
                  "ref": 71
                },
                "removeListener": {
                  "ref": 73
                },
                "removeAllListeners": {
                  "ref": 75
                },
                "listeners": {
                  "ref": 77
                }
              }
            }
          }
        },
        "TempStore": {
          "type": "object",
          "members": {
            "domain": {
              "type": "null",
              "value": null
            },
            "Tracker": {
              "type": "object",
              "members": {
                "constructor": {
                  "type": "function",
                  "refID": 145,
                  "members": {
                    "Cursor": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "object",
                          "members": {
                            "rewind": {
                              "type": "function"
                            },
                            "forEach": {
                              "type": "function"
                            },
                            "getTransform": {
                              "type": "function"
                            },
                            "map": {
                              "type": "function"
                            },
                            "fetch": {
                              "type": "function"
                            },
                            "count": {
                              "type": "function"
                            },
                            "observe": {
                              "type": "function"
                            },
                            "observeChanges": {
                              "type": "function"
                            }
                          }
                        }
                      }
                    },
                    "ObjectID": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "object",
                          "members": {
                            "toString": {
                              "type": "function"
                            },
                            "equals": {
                              "type": "function"
                            },
                            "clone": {
                              "type": "function"
                            },
                            "typeName": {
                              "type": "function"
                            },
                            "getTimestamp": {
                              "type": "function"
                            },
                            "toHexString": {
                              "type": "function",
                              "refID": 176
                            },
                            "toJSONValue": {
                              "ref": 176
                            },
                            "valueOf": {
                              "ref": 176
                            }
                          }
                        }
                      }
                    },
                    "future": {
                      "type": "function"
                    },
                    "deprecate": {
                      "type": "function"
                    },
                    "get": {
                      "type": "function"
                    },
                    "getAll": {
                      "type": "function"
                    },
                    "prototype": {
                      "type": "object",
                      "members": {
                        "constructor": {
                          "ref": 145
                        },
                        "find": {
                          "type": "function",
                          "refID": 187
                        },
                        "findOne": {
                          "type": "function",
                          "refID": 189
                        },
                        "insert": {
                          "type": "function",
                          "refID": 191
                        },
                        "update": {
                          "type": "function",
                          "refID": 193
                        },
                        "remove": {
                          "type": "function",
                          "refID": 195
                        },
                        "upsert": {
                          "type": "function",
                          "refID": 197
                        },
                        "allow": {
                          "type": "function",
                          "refID": 199
                        },
                        "deny": {
                          "type": "function",
                          "refID": 201
                        }
                      }
                    }
                  }
                },
                "find": {
                  "ref": 187
                },
                "findOne": {
                  "ref": 189
                },
                "insert": {
                  "ref": 191
                },
                "update": {
                  "ref": 193
                },
                "remove": {
                  "ref": 195
                },
                "upsert": {
                  "ref": 197
                },
                "allow": {
                  "ref": 199
                },
                "deny": {
                  "ref": 201
                }
              }
            },
            "Storage": {
              "type": "null",
              "value": null
            },
            "exists": {
              "type": "function"
            },
            "listParts": {
              "type": "function"
            },
            "removeFile": {
              "type": "function"
            },
            "removeAll": {
              "type": "function"
            },
            "createWriteStream": {
              "type": "function"
            },
            "createReadStream": {
              "type": "function"
            },
            "setMaxListeners": {
              "ref": 65
            },
            "emit": {
              "ref": 67
            },
            "addListener": {
              "ref": 69
            },
            "on": {
              "ref": 69
            },
            "once": {
              "ref": 71
            },
            "removeListener": {
              "ref": 73
            },
            "removeAllListeners": {
              "ref": 75
            },
            "listeners": {
              "ref": 77
            }
          }
        },
        "HTTP": {
          "type": "object",
          "members": {
            "uploadUrl": {
              "type": "constant",
              "value": "/cfs/files"
            },
            "setBaseUrl": {
              "type": "function"
            },
            "setHeadersForGet": {
              "type": "function"
            },
            "publish": {
              "type": "function"
            },
            "unpublish": {
              "type": "function"
            },
            "mount": {
              "type": "function"
            },
            "unmount": {
              "type": "function"
            },
            "now": {
              "type": "function"
            }
          }
        },
        "Collection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "domain": {
                  "type": "null",
                  "value": null
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                },
                "allowsFile": {
                  "type": "function"
                },
                "filters": {
                  "type": "function"
                },
                "setMaxListeners": {
                  "ref": 65
                },
                "emit": {
                  "ref": 67
                },
                "addListener": {
                  "ref": 69
                },
                "on": {
                  "ref": 69
                },
                "once": {
                  "ref": 71
                },
                "removeListener": {
                  "ref": 73
                },
                "removeAllListeners": {
                  "ref": 75
                },
                "listeners": {
                  "ref": 77
                }
              }
            }
          }
        },
        "FileWorker": {
          "type": "object",
          "members": {
            "observe": {
              "type": "function"
            }
          }
        }
      }
    },
    "_Utility": {
      "type": "object",
      "members": {
        "defaultZero": {
          "type": "function"
        }
      }
    }
  },
  "raix:eventemitter": {
    "EventEmitter": {
      "type": "function",
      "members": {
        "listenerCount": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "setMaxListeners": {
              "type": "function"
            },
            "emit": {
              "type": "function"
            },
            "addListener": {
              "type": "function",
              "refID": 8
            },
            "on": {
              "ref": 8
            },
            "once": {
              "type": "function"
            },
            "removeListener": {
              "type": "function"
            },
            "removeAllListeners": {
              "type": "function"
            },
            "listeners": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "cfs:storage-adapter": {},
  "cfs:filesystem": {},
  "session": {},
  "cfs:data-man": {
    "DataMan": {
      "type": "function",
      "members": {
        "Buffer": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getBuffer": {
                  "type": "function"
                },
                "getDataUri": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                }
              }
            }
          }
        },
        "DataURI": {
          "type": "function"
        },
        "FilePath": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getBuffer": {
                  "type": "function"
                },
                "getDataUri": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                }
              }
            }
          }
        },
        "URL": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getBuffer": {
                  "type": "function"
                },
                "getDataUri": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReadStream": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getBuffer": {
                  "type": "function"
                },
                "getDataUri": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                }
              }
            }
          }
        },
        "prototype": {
          "type": "object",
          "members": {
            "getBuffer": {
              "type": "function"
            },
            "saveToFile": {
              "type": "function"
            },
            "getDataUri": {
              "type": "function"
            },
            "createReadStream": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "type": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "cfs:file": {},
  "cfs:tempstore": {},
  "cfs:http-methods": {
    "HTTP": {
      "type": "object",
      "members": {
        "get": {
          "type": "function"
        },
        "post": {
          "type": "function"
        },
        "put": {
          "type": "function"
        },
        "del": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "methodsMaxDataLength": {
          "type": "constant",
          "value": 5242880
        },
        "methods": {
          "type": "function"
        },
        "publishFormats": {
          "type": "function"
        },
        "publish": {
          "type": "function"
        },
        "unpublish": {
          "type": "function"
        }
      }
    },
    "_methodHTTP": {
      "type": "object",
      "members": {
        "methodHandlers": {
          "type": "object",
          "members": {
            "/cfs/servertime/": {
              "type": "object",
              "members": {
                "auth": {
                  "type": "function",
                  "refID": 3
                },
                "POST": {
                  "type": "undefined"
                },
                "PUT": {
                  "type": "undefined"
                },
                "GET": {
                  "type": "function",
                  "refID": 5
                },
                "DELETE": {
                  "type": "undefined"
                },
                "HEAD": {
                  "ref": 5
                },
                "OPTIONS": {
                  "type": "function",
                  "refID": 7
                }
              }
            },
            "/cfs/files/:value/:value/:value/": {
              "type": "object",
              "members": {
                "auth": {
                  "type": "function",
                  "refID": 10
                },
                "POST": {
                  "type": "function",
                  "refID": 12
                },
                "PUT": {
                  "type": "function",
                  "refID": 14
                },
                "GET": {
                  "type": "function",
                  "refID": 16
                },
                "DELETE": {
                  "type": "function",
                  "refID": 18
                },
                "HEAD": {
                  "ref": 16
                },
                "OPTIONS": {
                  "ref": 7
                }
              }
            },
            "/cfs/files/:value/:value/": {
              "type": "object",
              "members": {
                "auth": {
                  "ref": 10
                },
                "POST": {
                  "ref": 12
                },
                "PUT": {
                  "ref": 14
                },
                "GET": {
                  "ref": 16
                },
                "DELETE": {
                  "ref": 18
                },
                "HEAD": {
                  "ref": 16
                },
                "OPTIONS": {
                  "ref": 7
                }
              }
            },
            "/cfs/files/:value/": {
              "type": "object",
              "members": {
                "auth": {
                  "ref": 10
                },
                "POST": {
                  "ref": 12
                },
                "PUT": {
                  "ref": 14
                },
                "GET": {
                  "ref": 16
                },
                "DELETE": {
                  "ref": 18
                },
                "HEAD": {
                  "ref": 16
                },
                "OPTIONS": {
                  "ref": 7
                }
              }
            }
          }
        },
        "methodTree": {
          "type": "object",
          "members": {
            "cfs": {
              "type": "object",
              "members": {
                "servertime": {
                  "type": "object",
                  "members": {
                    ":ref": {
                      "type": "object",
                      "members": {
                        "name": {
                          "type": "constant",
                          "value": "/cfs/servertime/"
                        },
                        "params": {
                          "type": "array"
                        }
                      }
                    }
                  }
                },
                "files": {
                  "type": "object",
                  "members": {
                    ":value": {
                      "type": "object",
                      "members": {
                        ":value": {
                          "type": "object",
                          "members": {
                            ":value": {
                              "type": "object",
                              "members": {
                                ":ref": {
                                  "type": "object",
                                  "members": {
                                    "name": {
                                      "type": "constant",
                                      "value": "/cfs/files/:value/:value/:value/"
                                    },
                                    "params": {
                                      "type": "array"
                                    }
                                  }
                                }
                              }
                            },
                            ":ref": {
                              "type": "object",
                              "members": {
                                "name": {
                                  "type": "constant",
                                  "value": "/cfs/files/:value/:value/"
                                },
                                "params": {
                                  "type": "array"
                                }
                              }
                            }
                          }
                        },
                        ":ref": {
                          "type": "object",
                          "members": {
                            "name": {
                              "type": "constant",
                              "value": "/cfs/files/:value/"
                            },
                            "params": {
                              "type": "array"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "nameFollowsConventions": {
          "type": "function"
        },
        "getNameList": {
          "type": "function"
        },
        "createObject": {
          "type": "function"
        },
        "addToMethodTree": {
          "type": "function"
        },
        "getMethod": {
          "type": "function"
        },
        "getUserId": {
          "ref": 3
        },
        "defaultOptionsHandler": {
          "ref": 7
        }
      }
    }
  },
  "cfs:http-publish": {
    "_publishHTTP": {
      "type": "object",
      "members": {
        "currentlyPublished": {
          "type": "array"
        },
        "getPublishScope": {
          "type": "function"
        },
        "formatHandlers": {
          "type": "object",
          "members": {
            "json": {
              "type": "function"
            },
            "fileRecordFormat": {
              "type": "function"
            }
          }
        },
        "formatResult": {
          "type": "function"
        },
        "error": {
          "type": "function"
        },
        "getMethodHandler": {
          "type": "function"
        },
        "unpublishList": {
          "type": "function"
        },
        "unpublish": {
          "type": "function"
        }
      }
    }
  },
  "cfs:access-point": {},
  "cfs:reactive-property": {
    "ReactiveProperty": {
      "type": "function"
    }
  },
  "cfs:reactive-list": {
    "ReactiveList": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "length": {
              "type": "function"
            },
            "reset": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "getLastItem": {
              "type": "function"
            },
            "getFirstItem": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "forEachReverse": {
              "type": "function"
            },
            "fetch": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "cfs:power-queue": {
    "PowerQueue": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "processingList": {
              "type": "function"
            },
            "isHalted": {
              "type": "function"
            },
            "length": {
              "type": "function"
            },
            "progress": {
              "type": "function"
            },
            "usage": {
              "type": "function"
            },
            "reset": {
              "type": "function"
            },
            "add": {
              "type": "function"
            },
            "updateThrottleUp": {
              "type": "function"
            },
            "updateThrottleDown": {
              "type": "function"
            },
            "next": {
              "type": "function"
            },
            "runTaskDone": {
              "type": "function"
            },
            "runTask": {
              "type": "function"
            },
            "queueTaskHandler": {
              "type": "function"
            },
            "taskHandler": {
              "type": "function"
            },
            "errorHandler": {
              "type": "function"
            },
            "pause": {
              "type": "function"
            },
            "resume": {
              "type": "function"
            },
            "run": {
              "type": "function"
            },
            "stop": {
              "type": "function"
            },
            "cancel": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "cfs:upload-http": {},
  "cfs:collection": {},
  "cfs:collection-filters": {},
  "cfs:worker": {},
  "velocity:test-proxy": {},
  "velocity:node-soft-mirror": {}
}
var globalContext = (typeof global !== 'undefined') ? global : window

for (var packageName in packageMetadata) {
  for (var packageExportName in packageMetadata[packageName]) {
    var packageExport = packageMetadata[packageName][packageExportName]
    globalContext[packageExportName] = ComponentMocker.generateFromMetadata(packageExport)
  }
}
