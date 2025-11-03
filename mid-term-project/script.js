
(function(){

  const images = {"start": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwZTFhMTIiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA4MTAwYiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iIzdiZDM4OSIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iIzdiZDM4OSIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgVGhlIExvc3QgS2luZ2RvbSDigJQgRGVzdGlueSBDYWxscwogICAgICA8L3RleHQ+CiAgICA8L3N2Zz4=", "castle": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYTFiMmUiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBhMGIxNSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iIzliYjFmZiIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iIzliYjFmZiIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgQ2FzdGxlIEdhdGVzIOKAlCBUaGUgR2hvc3QgS2luZwogICAgICA8L3RleHQ+CiAgICA8L3N2Zz4=", "forest": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwYzFmMTMiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA2MTIwYiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iIzlhZjBjMiIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iIzlhZjBjMiIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgRW5jaGFudGVkIEZvcmVzdCDigJQgV2hpc3BlcmluZyBUcmVlcwogICAgICA8L3RleHQ+CiAgICA8L3N2Zz4=", "mountain": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyYjFhMWEiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzEyMDkwOSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iI2ZmYjNhMSIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iI2ZmYjNhMSIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgRHJhZ29uIE1vdW50YWluIOKAlCBBc2ggJiBXaW5kCiAgICAgIDwvdGV4dD4KICAgIDwvc3ZnPg==", "village": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxYzEzMWEiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBiMDcwYiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iI2ZmYWRjOCIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iI2ZmYWRjOCIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgRm9yZ290dGVuIFZpbGxhZ2Ug4oCUIEN1cnNlZCBMYW50ZXJucwogICAgICA8L3RleHQ+CiAgICA8L3N2Zz4=", "end_king": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyNDMwM2YiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzExMTgyMSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iI2JmZTNmZiIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iI2JmZTNmZiIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgRU5ESU5HIOKAlCBIZXJvIEtpbmcKICAgICAgPC90ZXh0PgogICAgPC9zdmc+", "end_nature": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxMjMzMWIiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBhMWYxMiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iIzlkZmZjNyIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iIzlkZmZjNyIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgRU5ESU5HIOKAlCBOYXR1cmXigJlzIEd1YXJkaWFuCiAgICAgIDwvdGV4dD4KICAgIDwvc3ZnPg==", "end_rider": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYjI0MjAiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzFiMGYwZCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iI2ZmY2ZiMCIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iI2ZmY2ZiMCIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgRU5ESU5HIOKAlCBEcmFnb24gUmlkZXIKICAgICAgPC90ZXh0PgogICAgPC9zdmc+", "end_thief": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyZTIyMTciLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzE0MGQwOCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iI2ZmZDM5YSIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iI2ZmZDM5YSIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgRU5ESU5HIOKAlCBUcmVhc3VyZSBUaGllZiAoQ3Vyc2VkKQogICAgICA8L3RleHQ+CiAgICA8L3N2Zz4=", "end_cursed": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyMjE4MmEiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBmMGExNCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iI2RkYjFmZiIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iI2RkYjFmZiIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgRU5ESU5HIOKAlCBDdXJzZWQgU291bAogICAgICA8L3RleHQ+CiAgICA8L3N2Zz4=", "end_sorcerer": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyYTE2MmEiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzE0MDkxNCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iI2ZmYjFlMyIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iI2ZmYjFlMyIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgRU5ESU5HIOKAlCBEYXJrIFNvcmNlcmVyCiAgICAgIDwvdGV4dD4KICAgIDwvc3ZnPg==", "end_redeem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxNTI0MmEiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBiMTYxYSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iI2IxZjBmZiIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iI2IxZjBmZiIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgRU5ESU5HIOKAlCBTcGlyaXRzIFJlZGVlbWVkCiAgICAgIDwvdGV4dD4KICAgIDwvc3ZnPg==", "end_wander": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAwIiBoZWlnaHQ9IjgwMCI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHgyPSIxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyMDJhMmUiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBlMTUxNyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMTgwIiBjeT0iMTYwIiByPSI3MCIgZmlsbD0iI2M3ZTZmZiIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI2NjAiIHI9IjEyMCIgZmlsbD0iI2M3ZTZmZiIgb3BhY2l0eT0iMC4xMiIvPgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgZm9udC1mYW1pbHk9Ikdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZiIgZm9udC1zaXplPSI1NCIgZmlsbD0iI2Y0ZmZmNiI+CiAgICAgICAgRU5ESU5HIOKAlCBGb3Jnb3R0ZW4gV2FuZGVyZXIKICAgICAgPC90ZXh0PgogICAgPC9zdmc+"};
  const discovered = new Set(JSON.parse(localStorage.getItem("kingdom_endings")||"[]"));

  const el = {
    img: document.getElementById('image'),
    text: document.getElementById('text'),
    choices: document.getElementById('choices'),
    history: document.getElementById('history'),
    badgeEndings: document.getElementById('badge-endings'),
    btnStart: document.getElementById('btn-start'),
    btnRandom: document.getElementById('btn-random'),
    btnHistory: document.getElementById('btn-history')
  };

  function ending(key, text, image){
    return {
      type: 'ending',
      key,
      text,
      image,
      choices: [{ label: "Play again", next: "start" }]
    };
  }

  const story = {
    start: {
      text: "In Silverwood Forest, runes awaken and a voice whispers: 'Chosen one... destiny calls.' A hidden path appears. Where will you go?",
      image: "https://thumbs.dreamstime.com/b/mystical-midnight-forest-clearing-enchanted-light-shadow-dance-dreamlike-woodland-scene-step-captivating-realm-where-395047190.jpg",
      choices: [
        { label: "Approach the Castle Gates", next: "castle" },
        { label: "Enter the Enchanted Forest", next: "forest" },
        { label: "Climb the Dragon Mountain", next: "mountain" },
        { label: "Search the Forgotten Village", next: "village" }
      ]
    },

    castle: {
      text: "The ghost king watches from the ramparts, half-real. 'Prove your heart,' he says, 'and the crown will answer.'",
      image: "https://t3.ftcdn.net/jpg/06/75/82/80/360_F_675828038_WDKUMzDyKiNAnlFVe7saszR2pwD8EtQm.jpg",
      choices: [
        { label: "Swear loyalty to the realm", next: "ending_king" },
        { label: "Slip past the guards", next: "ending_thief" },
        { label: "Ask the king for wisdom", next: "forest" }
      ]
    },

    forest: {
      text: "Leaves whisper your name; a glowing sprite beckons. 'Drink, and see,' the spring sings.",
      image: "https://i.etsystatic.com/41045176/r/il/d884d6/4705115909/il_fullxfull.4705115909_hw3d.jpg",
      choices: [
        { label: "Follow the sprite deeper", next: "ending_nature" },
        { label: "Drink from the spring (risky)", next: "ending_sorcerer" },
        { label: "Draw your sword against the dark", next: "village" }
      ]
    },

    mountain: {
      text: "Ash on the wind. A dragon sleeps in a crown of obsidian. Its eye opens — ancient and bright.",
      image: "https://i.pinimg.com/736x/4d/aa/f3/4daaf3b5a8c95bd6a506769d860782c7.jpg",
      choices: [
        { label: "Bow and speak your truth", next: "ending_rider" },
        { label: "Sneak into the treasure cave", next: "ending_thief" },
        { label: "Call for the Skyblade of old", next: "castle" }
      ]
    },

    village: {
      text: "Lanterns burn without flame. A child’s shadow whispers: 'Free us… or join us.'",
      image: "https://i.pinimg.com/564x/97/f0/cf/97f0cf17d4483d3b7cb038a1832c30f0.jpg",
      choices: [
        { label: "Burn the cursed altar", next: "ending_redeem" },
        { label: "Listen to the shadow child", next: "ending_cursed" },
        { label: "Search houses for clues", next: "forest" }
      ]
    },

    ending_king: ending("end_king",
      "You kneel with an honest heart. The crown turns warm and whole. You rise as a just ruler — the realm sings your name.",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPHmpEOAHeIVGZZubMNQjJ-sUtpdThyphenhyphen1bpHR6llv7itQCs6WGtdn-su0erdVFt9tHJO_zBbGgUNDL0UAtibTIAIy5JUFFem3jp082t5Riv76cfGy21KBZYkWhD_kKMllpwY9ZPNJU654XtsFe1PiqkEaarll7E0zyYRxp2dbKEyASHLL273f125AL626U/w1200-h630-p-k-no-nu/HERO.jpg"),

    ending_nature: ending("end_nature",
      "You walk until your stps match the forest’s breath. Roots welcome you; you become its unseen guardian.",
      "https://i.ytimg.com/vi/ywVJwBg2oNg/maxresdefault.jpg"),

    ending_rider: ending("end_rider",
      "You speak without fear. The dragon lowers its head. In the sky’s cold light, you are chosen.",
      "https://philzine.wordpress.com/wp-content/uploads/2010/03/how-to-train.jpg"),

    ending_thief: ending("end_thief",
      "Gold answers greed with a patient curse. Riches follow you, and silence too. Joy slips like sand.",
      "https://seaofthieves.wiki.gg/images/thumb/Ach_Laden_With_Treasure.jpg/1200px-Ach_Laden_With_Treasure.jpg?ece497"),

    ending_cursed: ending("end_cursed",
      "Small fingers weave your shadow into theirs. You fade with a lullaby only ghosts remember.",
      "https://img.freepik.com/premium-vector/strong-warrior-robe-illustration_579677-722.jpg?semt=ais_hybrid&w=740&q=80"),

    ending_sorcerer: ending("end_sorcerer",
      "Magic answers thirst the way fire answers straw. Power blooms — and so does hunger.",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROe7BcEKbfQIrfq4aFIlpLNkgZClKfeXToDw&s"),

    ending_redeem: ending("end_redeem",
      "Flame meets ash. The village breathes. Spirits bow and vanish like dew in dawnlight.",
      "https://img.freepik.com/premium-photo/medieval-warriors-attacking-village-setting-buildings-fire-looting-creating-chaos-with-smoke-flames-concept-medieval-warfare-village-attack-fire-chaos-loot-pillage_864588-60872.jpg"),

    ending_wander: ending("end_wander",
      "The path circles back and your name thins with the mist. You wander, kind to strangers, unknown to songs.",
       "https://glamours.eorzeacollection.com/133446/forgotten-wanderer-1-1640031199.png"),
  };

  let state = { current: 'start', history: [] };

  function startGame(){
    state = { current: 'start', history: [] };
    render();
  }

  function render(){
    const node = story[state.current];
    if(!node) return;
    el.img.style.backgroundImage = `url(${node.image})`;
    el.text.textContent = node.text;

    const last = state.history[state.history.length-1];
    if(!last || last.node !== state.current){
      state.history.push({ node: state.current, label: readable(state.current) });
      drawHistory();
    }

    el.choices.innerHTML = "";
    node.choices.forEach((c, i)=>{
      const b = document.createElement('button');
      b.className = 'choice-btn';
      b.innerHTML = `<strong>${i+1}) ${c.label}</strong><small>Press ${i+1}</small>`;
      b.addEventListener('click', ()=> choose(c.next));
      el.choices.appendChild(b);
    });

    if(node.type === 'ending' && node.key){
      discovered.add(node.key);
      localStorage.setItem("kingdom_endings", JSON.stringify(Array.from(discovered)));
    }
    updateEndingBadge();
  }

  function choose(nextKey){
    state.current = nextKey;
    render();
  }

  function drawHistory(){
    el.history.innerHTML = "";
    state.history.forEach((h, i)=>{
      const li = document.createElement('li');
      li.textContent = `${i+1}. ${h.label}`;
      el.history.appendChild(li);
    });
  }

  function readable(key){
    const map = {
      start:"Silverwood Path",
      castle:"Castle Gates",
      forest:"Enchanted Forest",
      mountain:"Dragon Mountain",
      village:"Forgotten Village",
      ending_king:"Ending — Hero King",
      ending_nature:"Ending — Nature’s Guardian",
      ending_rider:"Ending — Dragon Rider",
      ending_thief:"Ending — Treasure Thief",
      ending_cursed:"Ending — Cursed Soul",
      ending_sorcerer:"Ending — Dark Sorcerer",
      ending_redeem:"Ending — Spirits Redeemed",
      ending_wander:"Ending — Forgotten Wanderer",
    };
    return map[key] || key;
  }

  function updateEndingBadge(){
    el.badgeEndings.innerHTML = `Endings found: <strong>${discovered.size}</strong>/8`;
  }

  el.btnStart.addEventListener('click', startGame);
  el.btnRandom.addEventListener('click', ()=>{
    const node = story[state.current];
    if(!node || !node.choices.length) return;
    const idx = Math.floor(Math.random()*node.choices.length);
    choose(node.choices[idx].next);
  });
  el.btnHistory.addEventListener('click', ()=>{
    const s = el.history.style;
    s.display = (s.display === 'none') ? '' : 'none';
  });

  window.addEventListener('keydown', (e)=>{
    if(e.key.toLowerCase() == 'r') startGame();
    const n = parseInt(e.key,10);
    if(!isNaN(n)){
      const node = story[state.current];
      if(node && node.choices[n-1]) choose(node.choices[n-1].next);
    }
  });

  startGame();

})();
