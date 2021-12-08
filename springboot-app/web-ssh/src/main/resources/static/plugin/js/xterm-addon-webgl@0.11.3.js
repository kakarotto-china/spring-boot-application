!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.WebglAddon = e() : t.WebglAddon = e()
}(self, (function () {
    return (() => {
        "use strict";
        var t = {
            965: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.GlyphRenderer = void 0;
                var r = i(381), o = i(310), n = i(455), s = i(259), a = i(855), l = i(147), h = 10,
                    c = h * Float32Array.BYTES_PER_ELEMENT, _ = function () {
                        function t(t, e, i, o) {
                            this._terminal = t, this._colors = e, this._gl = i, this._dimensions = o, this._activeBuffer = 0, this._vertices = {
                                count: 0,
                                attributes: new Float32Array(0),
                                attributesBuffers: [new Float32Array(0), new Float32Array(0)],
                                selectionAttributes: new Float32Array(0)
                            };
                            var n = this._gl,
                                s = (0, r.throwIfFalsy)((0, r.createProgram)(n, "#version 300 es\nlayout (location = 0) in vec2 a_unitquad;\nlayout (location = 1) in vec2 a_cellpos;\nlayout (location = 2) in vec2 a_offset;\nlayout (location = 3) in vec2 a_size;\nlayout (location = 4) in vec2 a_texcoord;\nlayout (location = 5) in vec2 a_texsize;\n\nuniform mat4 u_projection;\nuniform vec2 u_resolution;\n\nout vec2 v_texcoord;\n\nvoid main() {\n  vec2 zeroToOne = (a_offset / u_resolution) + a_cellpos + (a_unitquad * a_size);\n  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);\n  v_texcoord = a_texcoord + a_unitquad * a_texsize;\n}", "#version 300 es\nprecision lowp float;\n\nin vec2 v_texcoord;\n\nuniform sampler2D u_texture;\n\nout vec4 outColor;\n\nvoid main() {\n  outColor = texture(u_texture, v_texcoord);\n}"));
                            this._program = s, this._projectionLocation = (0, r.throwIfFalsy)(n.getUniformLocation(this._program, "u_projection")), this._resolutionLocation = (0, r.throwIfFalsy)(n.getUniformLocation(this._program, "u_resolution")), this._textureLocation = (0, r.throwIfFalsy)(n.getUniformLocation(this._program, "u_texture")), this._vertexArrayObject = n.createVertexArray(), n.bindVertexArray(this._vertexArrayObject);
                            var a = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), l = n.createBuffer();
                            n.bindBuffer(n.ARRAY_BUFFER, l), n.bufferData(n.ARRAY_BUFFER, a, n.STATIC_DRAW), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, this._gl.FLOAT, !1, 0, 0);
                            var h = new Uint8Array([0, 1, 3, 0, 2, 3]), _ = n.createBuffer();
                            n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, _), n.bufferData(n.ELEMENT_ARRAY_BUFFER, h, n.STATIC_DRAW), this._attributesBuffer = (0, r.throwIfFalsy)(n.createBuffer()), n.bindBuffer(n.ARRAY_BUFFER, this._attributesBuffer), n.enableVertexAttribArray(2), n.vertexAttribPointer(2, 2, n.FLOAT, !1, c, 0), n.vertexAttribDivisor(2, 1), n.enableVertexAttribArray(3), n.vertexAttribPointer(3, 2, n.FLOAT, !1, c, 2 * Float32Array.BYTES_PER_ELEMENT), n.vertexAttribDivisor(3, 1), n.enableVertexAttribArray(4), n.vertexAttribPointer(4, 2, n.FLOAT, !1, c, 4 * Float32Array.BYTES_PER_ELEMENT), n.vertexAttribDivisor(4, 1), n.enableVertexAttribArray(5), n.vertexAttribPointer(5, 2, n.FLOAT, !1, c, 6 * Float32Array.BYTES_PER_ELEMENT), n.vertexAttribDivisor(5, 1), n.enableVertexAttribArray(1), n.vertexAttribPointer(1, 2, n.FLOAT, !1, c, 8 * Float32Array.BYTES_PER_ELEMENT), n.vertexAttribDivisor(1, 1), this._atlasTexture = (0, r.throwIfFalsy)(n.createTexture()), n.bindTexture(n.TEXTURE_2D, this._atlasTexture), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255])), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.enable(n.BLEND), n.blendFunc(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA), this.onResize()
                        }

                        return t.prototype.beginFrame = function () {
                            return !this._atlas || this._atlas.beginFrame()
                        }, t.prototype.updateCell = function (t, e, i, r, o, n) {
                            this._updateCell(this._vertices.attributes, t, e, i, r, o, n)
                        }, t.prototype._updateCell = function (t, e, i, r, o, s, l) {
                            var c, _ = (i * this._terminal.cols + e) * h;
                            r !== a.NULL_CELL_CODE && void 0 !== r ? this._atlas && ((c = l && l.length > 1 ? this._atlas.getRasterizedGlyphCombinedChar(l, o, s) : this._atlas.getRasterizedGlyph(r, o, s)) ? (t[_] = -c.offset.x + this._dimensions.scaledCharLeft, t[_ + 1] = -c.offset.y + this._dimensions.scaledCharTop, t[_ + 2] = c.size.x / this._dimensions.scaledCanvasWidth, t[_ + 3] = c.size.y / this._dimensions.scaledCanvasHeight, t[_ + 4] = c.texturePositionClipSpace.x, t[_ + 5] = c.texturePositionClipSpace.y, t[_ + 6] = c.sizeClipSpace.x, t[_ + 7] = c.sizeClipSpace.y) : (0, n.fill)(t, 0, _, _ + h - 1 - 2)) : (0, n.fill)(t, 0, _, _ + h - 1 - 2)
                        }, t.prototype.updateSelection = function (t) {
                            var e = this._terminal;
                            this._vertices.selectionAttributes = (0, s.slice)(this._vertices.attributes, 0);
                            var i = this._colors.selectionOpaque.rgba >>> 8 | 50331648;
                            if (t.selection.columnSelectMode) for (var r = t.selection.startCol, o = t.selection.endCol - r, n = t.selection.viewportCappedEndRow - t.selection.viewportCappedStartRow + 1, a = t.selection.viewportCappedStartRow; a < t.selection.viewportCappedStartRow + n; a++) this._updateSelectionRange(r, r + o, a, t, i); else {
                                r = t.selection.viewportStartRow === t.selection.viewportCappedStartRow ? t.selection.startCol : 0;
                                var l = t.selection.viewportCappedStartRow === t.selection.viewportCappedEndRow ? t.selection.endCol : e.cols;
                                this._updateSelectionRange(r, l, t.selection.viewportCappedStartRow, t, i);
                                var h = Math.max(t.selection.viewportCappedEndRow - t.selection.viewportCappedStartRow - 1, 0);
                                for (a = t.selection.viewportCappedStartRow + 1; a <= t.selection.viewportCappedStartRow + h; a++) this._updateSelectionRange(0, l, a, t, i);
                                if (t.selection.viewportCappedStartRow !== t.selection.viewportCappedEndRow) {
                                    var c = t.selection.viewportEndRow === t.selection.viewportCappedEndRow ? t.selection.endCol : e.cols;
                                    this._updateSelectionRange(0, c, t.selection.viewportCappedEndRow, t, i)
                                }
                            }
                        }, t.prototype._updateSelectionRange = function (t, e, i, r, n) {
                            for (var s, a = this._terminal, h = i + a.buffer.active.viewportY, c = t; c < e; c++) {
                                var _ = (i * this._terminal.cols + c) * o.RENDER_MODEL_INDICIES_PER_CELL, d = r.cells[_],
                                    u = r.cells[_ + o.RENDER_MODEL_FG_OFFSET];
                                if (67108864 & u) {
                                    var f = new l.AttributeData;
                                    switch (f.fg = u, f.bg = r.cells[_ + o.RENDER_MODEL_BG_OFFSET], u &= -134217728, f.getBgColorMode()) {
                                        case 16777216:
                                        case 33554432:
                                            var p = this._getColorFromAnsiIndex(f.getBgColor()).rgba;
                                            u |= p >> 8 & 16711680 | p >> 8 & 65280 | p >> 8 & 255;
                                        case 50331648:
                                            var g = l.AttributeData.toColorRGB(f.getBgColor());
                                            u |= g[0] << 16 | g[1] << 8 | g[2] << 0;
                                        default:
                                            var v = this._colors.background.rgba;
                                            u |= v >> 8 & 16711680 | v >> 8 & 65280 | v >> 8 & 255
                                    }
                                    u |= 50331648
                                }
                                if (d & o.COMBINED_CHAR_BIT_MASK) {
                                    s || (s = a.buffer.active.getLine(h));
                                    var C = s.getCell(c).getChars();
                                    this._updateCell(this._vertices.selectionAttributes, c, i, r.cells[_], n, u, C)
                                } else this._updateCell(this._vertices.selectionAttributes, c, i, r.cells[_], n, u)
                            }
                        }, t.prototype._getColorFromAnsiIndex = function (t) {
                            if (t >= this._colors.ansi.length) throw new Error("No color found for idx " + t);
                            return this._colors.ansi[t]
                        }, t.prototype.onResize = function () {
                            var t = this._terminal, e = this._gl;
                            e.viewport(0, 0, e.canvas.width, e.canvas.height);
                            var i = t.cols * t.rows * h;
                            if (this._vertices.count !== i) {
                                this._vertices.count = i, this._vertices.attributes = new Float32Array(i);
                                for (var r = 0; r < this._vertices.attributesBuffers.length; r++) this._vertices.attributesBuffers[r] = new Float32Array(i);
                                for (var o = 0, n = 0; n < t.rows; n++) for (var s = 0; s < t.cols; s++) this._vertices.attributes[o + 8] = s / t.cols, this._vertices.attributes[o + 9] = n / t.rows, o += h
                            }
                        }, t.prototype.setColors = function () {
                        }, t.prototype.render = function (t, e) {
                            if (this._atlas) {
                                var i = this._gl;
                                i.useProgram(this._program), i.bindVertexArray(this._vertexArrayObject), this._activeBuffer = (this._activeBuffer + 1) % 2;
                                for (var o = this._vertices.attributesBuffers[this._activeBuffer], n = 0, s = 0; s < t.lineLengths.length; s++) {
                                    var a = s * this._terminal.cols * h,
                                        l = (e ? this._vertices.selectionAttributes : this._vertices.attributes).subarray(a, a + t.lineLengths[s] * h);
                                    o.set(l, n), n += l.length
                                }
                                i.bindBuffer(i.ARRAY_BUFFER, this._attributesBuffer), i.bufferData(i.ARRAY_BUFFER, o.subarray(0, n), i.STREAM_DRAW), this._atlas.hasCanvasChanged && (this._atlas.hasCanvasChanged = !1, i.uniform1i(this._textureLocation, 0), i.activeTexture(i.TEXTURE0 + 0), i.bindTexture(i.TEXTURE_2D, this._atlasTexture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, this._atlas.cacheCanvas), i.generateMipmap(i.TEXTURE_2D)), i.uniformMatrix4fv(this._projectionLocation, !1, r.PROJECTION_MATRIX), i.uniform2f(this._resolutionLocation, i.canvas.width, i.canvas.height), i.drawElementsInstanced(i.TRIANGLES, 6, i.UNSIGNED_BYTE, 0, n / h)
                            }
                        }, t.prototype.setAtlas = function (t) {
                            var e = this._gl;
                            this._atlas = t, e.bindTexture(e.TEXTURE_2D, this._atlasTexture), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.cacheCanvas), e.generateMipmap(e.TEXTURE_2D)
                        }, t.prototype.setDimensions = function (t) {
                            this._dimensions = t
                        }, t
                    }();
                e.GlyphRenderer = _
            }, 344: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.RectangleRenderer = void 0;
                var r = i(381), o = i(455), n = i(310), s = 8 * Float32Array.BYTES_PER_ELEMENT, a = function () {
                    function t(t, e, i, o) {
                        this._terminal = t, this._colors = e, this._gl = i, this._dimensions = o, this._vertices = {
                            count: 0,
                            attributes: new Float32Array(160),
                            selection: new Float32Array(24)
                        };
                        var n = this._gl;
                        this._program = (0, r.throwIfFalsy)((0, r.createProgram)(n, "#version 300 es\nlayout (location = 0) in vec2 a_position;\nlayout (location = 1) in vec2 a_size;\nlayout (location = 2) in vec4 a_color;\nlayout (location = 3) in vec2 a_unitquad;\n\nuniform mat4 u_projection;\nuniform vec2 u_resolution;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 zeroToOne = (a_position + (a_unitquad * a_size)) / u_resolution;\n  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);\n  v_color = a_color;\n}", "#version 300 es\nprecision lowp float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n  outColor = v_color;\n}")), this._resolutionLocation = (0, r.throwIfFalsy)(n.getUniformLocation(this._program, "u_resolution")), this._projectionLocation = (0, r.throwIfFalsy)(n.getUniformLocation(this._program, "u_projection")), this._vertexArrayObject = n.createVertexArray(), n.bindVertexArray(this._vertexArrayObject);
                        var a = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), l = n.createBuffer();
                        n.bindBuffer(n.ARRAY_BUFFER, l), n.bufferData(n.ARRAY_BUFFER, a, n.STATIC_DRAW), n.enableVertexAttribArray(3), n.vertexAttribPointer(3, 2, this._gl.FLOAT, !1, 0, 0);
                        var h = new Uint8Array([0, 1, 3, 0, 2, 3]), c = n.createBuffer();
                        n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, c), n.bufferData(n.ELEMENT_ARRAY_BUFFER, h, n.STATIC_DRAW), this._attributesBuffer = (0, r.throwIfFalsy)(n.createBuffer()), n.bindBuffer(n.ARRAY_BUFFER, this._attributesBuffer), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, s, 0), n.vertexAttribDivisor(0, 1), n.enableVertexAttribArray(1), n.vertexAttribPointer(1, 2, n.FLOAT, !1, s, 2 * Float32Array.BYTES_PER_ELEMENT), n.vertexAttribDivisor(1, 1), n.enableVertexAttribArray(2), n.vertexAttribPointer(2, 4, n.FLOAT, !1, s, 4 * Float32Array.BYTES_PER_ELEMENT), n.vertexAttribDivisor(2, 1), this._updateCachedColors()
                    }

                    return t.prototype.render = function () {
                        var t = this._gl;
                        t.useProgram(this._program), t.bindVertexArray(this._vertexArrayObject), t.uniformMatrix4fv(this._projectionLocation, !1, r.PROJECTION_MATRIX), t.uniform2f(this._resolutionLocation, t.canvas.width, t.canvas.height), t.bindBuffer(t.ARRAY_BUFFER, this._attributesBuffer), t.bufferData(t.ARRAY_BUFFER, this._vertices.attributes, t.DYNAMIC_DRAW), t.drawElementsInstanced(this._gl.TRIANGLES, 6, t.UNSIGNED_BYTE, 0, this._vertices.count), t.bindBuffer(t.ARRAY_BUFFER, this._attributesBuffer), t.bufferData(t.ARRAY_BUFFER, this._vertices.selection, t.DYNAMIC_DRAW), t.drawElementsInstanced(this._gl.TRIANGLES, 6, t.UNSIGNED_BYTE, 0, 3)
                    }, t.prototype.onResize = function () {
                        this._updateViewportRectangle()
                    }, t.prototype.setColors = function () {
                        this._updateCachedColors(), this._updateViewportRectangle()
                    }, t.prototype._updateCachedColors = function () {
                        this._bgFloat = this._colorToFloat32Array(this._colors.background), this._selectionFloat = this._colorToFloat32Array(this._colors.selectionOpaque)
                    }, t.prototype._updateViewportRectangle = function () {
                        this._addRectangleFloat(this._vertices.attributes, 0, 0, 0, this._terminal.cols * this._dimensions.scaledCellWidth, this._terminal.rows * this._dimensions.scaledCellHeight, this._bgFloat)
                    }, t.prototype.updateSelection = function (t) {
                        var e = this._terminal;
                        if (t.hasSelection) if (t.columnSelectMode) {
                            var i = t.startCol, r = t.endCol - i,
                                n = t.viewportCappedEndRow - t.viewportCappedStartRow + 1;
                            this._addRectangleFloat(this._vertices.selection, 0, i * this._dimensions.scaledCellWidth, t.viewportCappedStartRow * this._dimensions.scaledCellHeight, r * this._dimensions.scaledCellWidth, n * this._dimensions.scaledCellHeight, this._selectionFloat), (0, o.fill)(this._vertices.selection, 0, 8)
                        } else {
                            i = t.viewportStartRow === t.viewportCappedStartRow ? t.startCol : 0;
                            var s = t.viewportCappedStartRow === t.viewportEndRow ? t.endCol : e.cols;
                            this._addRectangleFloat(this._vertices.selection, 0, i * this._dimensions.scaledCellWidth, t.viewportCappedStartRow * this._dimensions.scaledCellHeight, (s - i) * this._dimensions.scaledCellWidth, this._dimensions.scaledCellHeight, this._selectionFloat);
                            var a = Math.max(t.viewportCappedEndRow - t.viewportCappedStartRow - 1, 0);
                            if (this._addRectangleFloat(this._vertices.selection, 8, 0, (t.viewportCappedStartRow + 1) * this._dimensions.scaledCellHeight, e.cols * this._dimensions.scaledCellWidth, a * this._dimensions.scaledCellHeight, this._selectionFloat), t.viewportCappedStartRow !== t.viewportCappedEndRow) {
                                var l = t.viewportEndRow === t.viewportCappedEndRow ? t.endCol : e.cols;
                                this._addRectangleFloat(this._vertices.selection, 16, 0, t.viewportCappedEndRow * this._dimensions.scaledCellHeight, l * this._dimensions.scaledCellWidth, this._dimensions.scaledCellHeight, this._selectionFloat)
                            } else (0, o.fill)(this._vertices.selection, 0, 16)
                        } else (0, o.fill)(this._vertices.selection, 0, 0)
                    }, t.prototype.updateBackgrounds = function (t) {
                        for (var e = this._terminal, i = this._vertices, r = 1, o = 0; o < e.rows; o++) {
                            for (var s = -1, a = 0, l = 0, h = !1, c = 0; c < e.cols; c++) {
                                var _ = (o * e.cols + c) * n.RENDER_MODEL_INDICIES_PER_CELL,
                                    d = t.cells[_ + n.RENDER_MODEL_BG_OFFSET],
                                    u = t.cells[_ + n.RENDER_MODEL_FG_OFFSET], f = !!(67108864 & u);
                                if (d !== a || u !== l && (h || f)) {
                                    if (0 !== a || h && 0 !== l) {
                                        var p = 8 * r++;
                                        this._updateRectangle(i, p, l, a, s, c, o)
                                    }
                                    s = c, a = d, l = u, h = f
                                }
                            }
                            (0 !== a || h && 0 !== l) && (p = 8 * r++, this._updateRectangle(i, p, l, a, s, e.cols, o))
                        }
                        i.count = r
                    }, t.prototype._updateRectangle = function (t, e, i, o, n, s, a) {
                        var l;
                        if (67108864 & i) switch (50331648 & i) {
                            case 16777216:
                            case 33554432:
                                l = this._colors.ansi[255 & i].rgba;
                                break;
                            case 50331648:
                                l = (16777215 & i) << 8;
                                break;
                            default:
                                l = this._colors.foreground.rgba
                        } else switch (50331648 & o) {
                            case 16777216:
                            case 33554432:
                                l = this._colors.ansi[255 & o].rgba;
                                break;
                            case 50331648:
                                l = (16777215 & o) << 8;
                                break;
                            default:
                                l = this._colors.background.rgba
                        }
                        t.attributes.length < e + 4 && (t.attributes = (0, r.expandFloat32Array)(t.attributes, this._terminal.rows * this._terminal.cols * 8));
                        var h = n * this._dimensions.scaledCellWidth, c = a * this._dimensions.scaledCellHeight,
                            _ = (l >> 24 & 255) / 255, d = (l >> 16 & 255) / 255, u = (l >> 8 & 255) / 255;
                        this._addRectangle(t.attributes, e, h, c, (s - n) * this._dimensions.scaledCellWidth, this._dimensions.scaledCellHeight, _, d, u, 1)
                    }, t.prototype._addRectangle = function (t, e, i, r, o, n, s, a, l, h) {
                        t[e] = i, t[e + 1] = r, t[e + 2] = o, t[e + 3] = n, t[e + 4] = s, t[e + 5] = a, t[e + 6] = l, t[e + 7] = h
                    }, t.prototype._addRectangleFloat = function (t, e, i, r, o, n, s) {
                        t[e] = i, t[e + 1] = r, t[e + 2] = o, t[e + 3] = n, t[e + 4] = s[0], t[e + 5] = s[1], t[e + 6] = s[2], t[e + 7] = s[3]
                    }, t.prototype._colorToFloat32Array = function (t) {
                        return new Float32Array([(t.rgba >> 24 & 255) / 255, (t.rgba >> 16 & 255) / 255, (t.rgba >> 8 & 255) / 255, (255 & t.rgba) / 255])
                    }, t
                }();
                e.RectangleRenderer = a
            }, 310: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.RenderModel = e.COMBINED_CHAR_BIT_MASK = e.RENDER_MODEL_FG_OFFSET = e.RENDER_MODEL_BG_OFFSET = e.RENDER_MODEL_INDICIES_PER_CELL = void 0;
                var r = i(455);
                e.RENDER_MODEL_INDICIES_PER_CELL = 3, e.RENDER_MODEL_BG_OFFSET = 1, e.RENDER_MODEL_FG_OFFSET = 2, e.COMBINED_CHAR_BIT_MASK = 2147483648;
                var o = function () {
                    function t() {
                        this.cells = new Uint32Array(0), this.lineLengths = new Uint32Array(0), this.selection = {
                            hasSelection: !1,
                            columnSelectMode: !1,
                            viewportStartRow: 0,
                            viewportEndRow: 0,
                            viewportCappedStartRow: 0,
                            viewportCappedEndRow: 0,
                            startCol: 0,
                            endCol: 0
                        }
                    }

                    return t.prototype.resize = function (t, i) {
                        var r = t * i * e.RENDER_MODEL_INDICIES_PER_CELL;
                        r !== this.cells.length && (this.cells = new Uint32Array(r), this.lineLengths = new Uint32Array(i))
                    }, t.prototype.clear = function () {
                        (0, r.fill)(this.cells, 0, 0), (0, r.fill)(this.lineLengths, 0, 0)
                    }, t.prototype.clearSelection = function () {
                        this.selection.hasSelection = !1, this.selection.viewportStartRow = 0, this.selection.viewportEndRow = 0, this.selection.viewportCappedStartRow = 0, this.selection.viewportCappedEndRow = 0, this.selection.startCol = 0, this.selection.endCol = 0
                    }, t
                }();
                e.RenderModel = o
            }, 259: (t, e) => {
                function i(t, e, i) {
                    void 0 === e && (e = 0), void 0 === i && (i = t.length), e < 0 && (e = (t.length + e) % t.length), i = i >= t.length ? t.length : (t.length + i) % t.length, e = Math.min(e, i);
                    for (var r = new t.constructor(i - e), o = 0; o < i - e; ++o) r[o] = t[o + e];
                    return r
                }

                Object.defineProperty(e, "__esModule", {value: !0}), e.sliceFallback = e.slice = void 0, e.slice = function (t, e, r) {
                    return t.slice ? t.slice(e, r) : i(t, e, r)
                }, e.sliceFallback = i
            }, 666: function (t, e, i) {
                var r, o = this && this.__extends || (r = function (t, e) {
                    return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    }, r(t, e)
                }, function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function i() {
                        this.constructor = t
                    }

                    r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                });
                Object.defineProperty(e, "__esModule", {value: !0}), e.JoinedCellData = e.WebglRenderer = void 0;
                var n = i(965), s = i(733), a = i(461), l = i(713), h = i(344), c = i(310), _ = i(859), d = i(855),
                    u = i(345), f = i(782), p = i(820), g = i(147), v = function (t) {
                        function e(e, i, r, o) {
                            var l = t.call(this) || this;
                            l._terminal = e, l._colors = i, l._characterJoinerService = r, l._model = new c.RenderModel, l._workCell = new f.CellData, l._onRequestRedraw = new u.EventEmitter, l._onContextLoss = new u.EventEmitter, l._core = l._terminal._core, l._renderLayers = [new s.LinkRenderLayer(l._core.screenElement, 2, l._colors, l._core), new a.CursorRenderLayer(e, l._core.screenElement, 3, l._colors, l._core, l._onRequestRedraw)], l.dimensions = {
                                scaledCharWidth: 0,
                                scaledCharHeight: 0,
                                scaledCellWidth: 0,
                                scaledCellHeight: 0,
                                scaledCharLeft: 0,
                                scaledCharTop: 0,
                                scaledCanvasWidth: 0,
                                scaledCanvasHeight: 0,
                                canvasWidth: 0,
                                canvasHeight: 0,
                                actualCellWidth: 0,
                                actualCellHeight: 0
                            }, l._devicePixelRatio = window.devicePixelRatio, l._updateDimensions(), l._canvas = document.createElement("canvas");
                            var _ = {antialias: !1, depth: !1, preserveDrawingBuffer: o};
                            if (l._gl = l._canvas.getContext("webgl2", _), !l._gl) throw new Error("WebGL2 not supported " + l._gl);
                            return l.register((0, p.addDisposableDomListener)(l._canvas, "webglcontextlost", (function (t) {
                                l._onContextLoss.fire(t)
                            }))), l._core.screenElement.appendChild(l._canvas), l._rectangleRenderer = new h.RectangleRenderer(l._terminal, l._colors, l._gl, l.dimensions), l._glyphRenderer = new n.GlyphRenderer(l._terminal, l._colors, l._gl, l.dimensions), l.onCharSizeChanged(), l._isAttached = document.body.contains(l._core.screenElement), l
                        }

                        return o(e, t), Object.defineProperty(e.prototype, "onRequestRedraw", {
                            get: function () {
                                return this._onRequestRedraw.event
                            }, enumerable: !1, configurable: !0
                        }), Object.defineProperty(e.prototype, "onContextLoss", {
                            get: function () {
                                return this._onContextLoss.event
                            }, enumerable: !1, configurable: !0
                        }), e.prototype.dispose = function () {
                            for (var e, i = 0, r = this._renderLayers; i < r.length; i++) r[i].dispose();
                            null === (e = this._canvas.parentElement) || void 0 === e || e.removeChild(this._canvas), t.prototype.dispose.call(this)
                        }, Object.defineProperty(e.prototype, "textureAtlas", {
                            get: function () {
                                var t;
                                return null === (t = this._charAtlas) || void 0 === t ? void 0 : t.cacheCanvas
                            }, enumerable: !1, configurable: !0
                        }), e.prototype.setColors = function (t) {
                            this._colors = t;
                            for (var e = 0, i = this._renderLayers; e < i.length; e++) {
                                var r = i[e];
                                r.setColors(this._terminal, this._colors), r.reset(this._terminal)
                            }
                            this._rectangleRenderer.setColors(), this._glyphRenderer.setColors(), this._refreshCharAtlas(), this._model.clear()
                        }, e.prototype.onDevicePixelRatioChange = function () {
                            this._devicePixelRatio !== window.devicePixelRatio && (this._devicePixelRatio = window.devicePixelRatio, this.onResize(this._terminal.cols, this._terminal.rows))
                        }, e.prototype.onResize = function (t, e) {
                            this._updateDimensions(), this._model.resize(this._terminal.cols, this._terminal.rows);
                            for (var i = 0, r = this._renderLayers; i < r.length; i++) r[i].resize(this._terminal, this.dimensions);
                            this._canvas.width = this.dimensions.scaledCanvasWidth, this._canvas.height = this.dimensions.scaledCanvasHeight, this._canvas.style.width = this.dimensions.canvasWidth + "px", this._canvas.style.height = this.dimensions.canvasHeight + "px", this._core.screenElement.style.width = this.dimensions.canvasWidth + "px", this._core.screenElement.style.height = this.dimensions.canvasHeight + "px", this._rectangleRenderer.onResize(), this._model.selection.hasSelection && this._rectangleRenderer.updateSelection(this._model.selection), this._glyphRenderer.setDimensions(this.dimensions), this._glyphRenderer.onResize(), this._refreshCharAtlas(), this._model.clear()
                        }, e.prototype.onCharSizeChanged = function () {
                            this.onResize(this._terminal.cols, this._terminal.rows)
                        }, e.prototype.onBlur = function () {
                            for (var t = 0, e = this._renderLayers; t < e.length; t++) e[t].onBlur(this._terminal)
                        }, e.prototype.onFocus = function () {
                            for (var t = 0, e = this._renderLayers; t < e.length; t++) e[t].onFocus(this._terminal)
                        }, e.prototype.onSelectionChanged = function (t, e, i) {
                            for (var r = 0, o = this._renderLayers; r < o.length; r++) o[r].onSelectionChanged(this._terminal, t, e, i);
                            this._updateSelectionModel(t, e, i), this._onRequestRedraw.fire({
                                start: 0,
                                end: this._terminal.rows - 1
                            })
                        }, e.prototype.onCursorMove = function () {
                            for (var t = 0, e = this._renderLayers; t < e.length; t++) e[t].onCursorMove(this._terminal)
                        }, e.prototype.onOptionsChanged = function () {
                            for (var t = 0, e = this._renderLayers; t < e.length; t++) e[t].onOptionsChanged(this._terminal);
                            this._updateDimensions(), this._refreshCharAtlas()
                        }, e.prototype._refreshCharAtlas = function () {
                            if (this.dimensions.scaledCharWidth <= 0 && this.dimensions.scaledCharHeight <= 0) this._isAttached = !1; else {
                                var t = (0, l.acquireCharAtlas)(this._terminal, this._colors, this.dimensions.scaledCellWidth, this.dimensions.scaledCellHeight, this.dimensions.scaledCharWidth, this.dimensions.scaledCharHeight);
                                if (!("getRasterizedGlyph" in t)) throw new Error("The webgl renderer only works with the webgl char atlas");
                                this._charAtlas = t, this._charAtlas.warmUp(), this._glyphRenderer.setAtlas(this._charAtlas)
                            }
                        }, e.prototype.clearCharAtlas = function () {
                            var t;
                            null === (t = this._charAtlas) || void 0 === t || t.clearTexture(), this._model.clear(), this._updateModel(0, this._terminal.rows - 1), this._onRequestRedraw.fire({
                                start: 0,
                                end: this._terminal.rows - 1
                            })
                        }, e.prototype.clear = function () {
                            for (var t = 0, e = this._renderLayers; t < e.length; t++) e[t].reset(this._terminal)
                        }, e.prototype.registerCharacterJoiner = function (t) {
                            return -1
                        }, e.prototype.deregisterCharacterJoiner = function (t) {
                            return !1
                        }, e.prototype.renderRows = function (t, e) {
                            if (!this._isAttached) {
                                if (!(document.body.contains(this._core.screenElement) && this._core._charSizeService.width && this._core._charSizeService.height)) return;
                                this._updateDimensions(), this._refreshCharAtlas(), this._isAttached = !0
                            }
                            for (var i = 0, r = this._renderLayers; i < r.length; i++) r[i].onGridChanged(this._terminal, t, e);
                            this._glyphRenderer.beginFrame() && (this._model.clear(), this._updateSelectionModel(void 0, void 0)), this._updateModel(t, e), this._rectangleRenderer.render(), this._glyphRenderer.render(this._model, this._model.selection.hasSelection)
                        }, e.prototype._updateModel = function (t, e) {
                            for (var i = this._core, r = this._workCell, o = t; o <= e; o++) {
                                var n = o + i.buffer.ydisp, s = i.buffer.lines.get(n);
                                this._model.lineLengths[o] = 0;
                                for (var a = this._characterJoinerService.getJoinedCharacters(n), l = 0; l < i.cols; l++) {
                                    s.loadCell(l, r);
                                    var h = !1, _ = l;
                                    if (a.length > 0 && l === a[0][0]) {
                                        h = !0;
                                        var u = a.shift();
                                        r = new C(r, s.translateToString(!0, u[0], u[1]), u[1] - u[0]), _ = u[1] - 1
                                    }
                                    var f = r.getChars(), p = r.getCode(),
                                        g = (o * i.cols + l) * c.RENDER_MODEL_INDICIES_PER_CELL;
                                    if (p !== d.NULL_CELL_CODE && (this._model.lineLengths[o] = l + 1), (this._model.cells[g] !== p || this._model.cells[g + c.RENDER_MODEL_BG_OFFSET] !== r.bg || this._model.cells[g + c.RENDER_MODEL_FG_OFFSET] !== r.fg) && (f.length > 1 && (p |= c.COMBINED_CHAR_BIT_MASK), this._model.cells[g] = p, this._model.cells[g + c.RENDER_MODEL_BG_OFFSET] = r.bg, this._model.cells[g + c.RENDER_MODEL_FG_OFFSET] = r.fg, this._glyphRenderer.updateCell(l, o, p, r.bg, r.fg, f), h)) for (r = this._workCell, l++; l < _; l++) {
                                        var v = (o * i.cols + l) * c.RENDER_MODEL_INDICIES_PER_CELL;
                                        this._glyphRenderer.updateCell(l, o, d.NULL_CELL_CODE, 0, 0, d.NULL_CELL_CHAR), this._model.cells[v] = d.NULL_CELL_CODE, this._model.cells[v + c.RENDER_MODEL_BG_OFFSET] = this._workCell.bg, this._model.cells[v + c.RENDER_MODEL_FG_OFFSET] = this._workCell.fg
                                    }
                                }
                            }
                            this._rectangleRenderer.updateBackgrounds(this._model), this._model.selection.hasSelection && this._glyphRenderer.updateSelection(this._model)
                        }, e.prototype._updateSelectionModel = function (t, e, i) {
                            void 0 === i && (i = !1);
                            var r = this._terminal;
                            if (!t || !e || t[0] === e[0] && t[1] === e[1]) return this._model.clearSelection(), void this._rectangleRenderer.updateSelection(this._model.selection);
                            var o = t[1] - r.buffer.active.viewportY, n = e[1] - r.buffer.active.viewportY,
                                s = Math.max(o, 0), a = Math.min(n, r.rows - 1);
                            if (s >= r.rows || a < 0) return this._model.clearSelection(), void this._rectangleRenderer.updateSelection(this._model.selection);
                            this._model.selection.hasSelection = !0, this._model.selection.columnSelectMode = i, this._model.selection.viewportStartRow = o, this._model.selection.viewportEndRow = n, this._model.selection.viewportCappedStartRow = s, this._model.selection.viewportCappedEndRow = a, this._model.selection.startCol = t[0], this._model.selection.endCol = e[0], this._rectangleRenderer.updateSelection(this._model.selection)
                        }, e.prototype._updateDimensions = function () {
                            this._core._charSizeService.width && this._core._charSizeService.height && (this.dimensions.scaledCharWidth = Math.floor(this._core._charSizeService.width * this._devicePixelRatio), this.dimensions.scaledCharHeight = Math.ceil(this._core._charSizeService.height * this._devicePixelRatio), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._terminal.getOption("lineHeight")), this.dimensions.scaledCharTop = 1 === this._terminal.getOption("lineHeight") ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._terminal.getOption("letterSpacing")), this.dimensions.scaledCharLeft = Math.floor(this._terminal.getOption("letterSpacing") / 2), this.dimensions.scaledCanvasHeight = this._terminal.rows * this.dimensions.scaledCellHeight, this.dimensions.scaledCanvasWidth = this._terminal.cols * this.dimensions.scaledCellWidth, this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / this._devicePixelRatio), this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / this._devicePixelRatio), this.dimensions.actualCellHeight = this.dimensions.scaledCellHeight / this._devicePixelRatio, this.dimensions.actualCellWidth = this.dimensions.scaledCellWidth / this._devicePixelRatio)
                        }, e
                    }(_.Disposable);
                e.WebglRenderer = v;
                var C = function (t) {
                    function e(e, i, r) {
                        var o = t.call(this) || this;
                        return o.content = 0, o.combinedData = "", o.fg = e.fg, o.bg = e.bg, o.combinedData = i, o._width = r, o
                    }

                    return o(e, t), e.prototype.isCombined = function () {
                        return 2097152
                    }, e.prototype.getWidth = function () {
                        return this._width
                    }, e.prototype.getChars = function () {
                        return this.combinedData
                    }, e.prototype.getCode = function () {
                        return 2097151
                    }, e.prototype.setFromCharData = function (t) {
                        throw new Error("not implemented")
                    }, e.prototype.getAsCharData = function () {
                        return [this.fg, this.getChars(), this.getWidth(), this.getCode()]
                    }, e
                }(g.AttributeData);
                e.JoinedCellData = C
            }, 381: (t, e) => {
                function i(t, e, i) {
                    var o = r(t.createShader(e));
                    if (t.shaderSource(o, i), t.compileShader(o), t.getShaderParameter(o, t.COMPILE_STATUS)) return o;
                    console.error(t.getShaderInfoLog(o)), t.deleteShader(o)
                }

                function r(t) {
                    if (!t) throw new Error("value must not be falsy");
                    return t
                }

                Object.defineProperty(e, "__esModule", {value: !0}), e.throwIfFalsy = e.expandFloat32Array = e.createShader = e.createProgram = e.PROJECTION_MATRIX = void 0, e.PROJECTION_MATRIX = new Float32Array([2, 0, 0, 0, 0, -2, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1]), e.createProgram = function (t, e, o) {
                    var n = r(t.createProgram());
                    if (t.attachShader(n, r(i(t, t.VERTEX_SHADER, e))), t.attachShader(n, r(i(t, t.FRAGMENT_SHADER, o))), t.linkProgram(n), t.getProgramParameter(n, t.LINK_STATUS)) return n;
                    console.error(t.getProgramInfoLog(n)), t.deleteProgram(n)
                }, e.createShader = i, e.expandFloat32Array = function (t, e) {
                    for (var i = Math.min(2 * t.length, e), r = new Float32Array(i), o = 0; o < t.length; o++) r[o] = t[o];
                    return r
                }, e.throwIfFalsy = r
            }, 713: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.removeTerminalFromCache = e.acquireCharAtlas = void 0;
                var r = i(433), o = i(167), n = [];
                e.acquireCharAtlas = function (t, e, i, s, a, l) {
                    for (var h = (0, r.generateConfig)(i, s, a, l, t, e), c = 0; c < n.length; c++) {
                        var _ = (d = n[c]).ownedBy.indexOf(t);
                        if (_ >= 0) {
                            if ((0, r.configEquals)(d.config, h)) return d.atlas;
                            1 === d.ownedBy.length ? (d.atlas.dispose(), n.splice(c, 1)) : d.ownedBy.splice(_, 1);
                            break
                        }
                    }
                    for (c = 0; c < n.length; c++) {
                        var d = n[c];
                        if ((0, r.configEquals)(d.config, h)) return d.ownedBy.push(t), d.atlas
                    }
                    var u = {atlas: new o.WebglCharAtlas(document, h), config: h, ownedBy: [t]};
                    return n.push(u), u.atlas
                }, e.removeTerminalFromCache = function (t) {
                    for (var e = 0; e < n.length; e++) {
                        var i = n[e].ownedBy.indexOf(t);
                        if (-1 !== i) {
                            1 === n[e].ownedBy.length ? (n[e].atlas.dispose(), n.splice(e, 1)) : n[e].ownedBy.splice(i, 1);
                            break
                        }
                    }
                }
            }, 433: (t, e) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.is256Color = e.configEquals = e.generateConfig = void 0;
                var i = {css: "", rgba: 0};
                e.generateConfig = function (t, e, r, o, n, s) {
                    var a = {
                        foreground: s.foreground,
                        background: s.background,
                        cursor: i,
                        cursorAccent: i,
                        selectionTransparent: i,
                        selectionOpaque: i,
                        ansi: s.ansi.slice(),
                        contrastCache: s.contrastCache
                    };
                    return {
                        customGlyphs: n.getOption("customGlyphs"),
                        devicePixelRatio: window.devicePixelRatio,
                        letterSpacing: n.getOption("letterSpacing"),
                        lineHeight: n.getOption("lineHeight"),
                        scaledCellWidth: t,
                        scaledCellHeight: e,
                        scaledCharWidth: r,
                        scaledCharHeight: o,
                        fontFamily: n.getOption("fontFamily"),
                        fontSize: n.getOption("fontSize"),
                        fontWeight: n.getOption("fontWeight"),
                        fontWeightBold: n.getOption("fontWeightBold"),
                        allowTransparency: n.getOption("allowTransparency"),
                        drawBoldTextInBrightColors: n.getOption("drawBoldTextInBrightColors"),
                        minimumContrastRatio: n.getOption("minimumContrastRatio"),
                        colors: a
                    }
                }, e.configEquals = function (t, e) {
                    for (var i = 0; i < t.colors.ansi.length; i++) if (t.colors.ansi[i].rgba !== e.colors.ansi[i].rgba) return !1;
                    return t.devicePixelRatio === e.devicePixelRatio && t.customGlyphs === e.customGlyphs && t.lineHeight === e.lineHeight && t.letterSpacing === e.letterSpacing && t.fontFamily === e.fontFamily && t.fontSize === e.fontSize && t.fontWeight === e.fontWeight && t.fontWeightBold === e.fontWeightBold && t.allowTransparency === e.allowTransparency && t.scaledCharWidth === e.scaledCharWidth && t.scaledCharHeight === e.scaledCharHeight && t.drawBoldTextInBrightColors === e.drawBoldTextInBrightColors && t.minimumContrastRatio === e.minimumContrastRatio && t.colors.foreground === e.colors.foreground && t.colors.background === e.colors.background
                }, e.is256Color = function (t) {
                    return 16777216 == (50331648 & t) || 33554432 == (50331648 & t)
                }
            }, 167: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.WebglCharAtlas = void 0;
                var r = i(499), o = i(855), n = i(381), s = i(147), a = i(742), l = i(14), h = 1024, c = 1024,
                    _ = Math.floor(819.2), d = {css: "rgba(0, 0, 0, 0)", rgba: 0}, u = {
                        offset: {x: 0, y: 0},
                        texturePosition: {x: 0, y: 0},
                        texturePositionClipSpace: {x: 0, y: 0},
                        size: {x: 0, y: 0},
                        sizeClipSpace: {x: 0, y: 0}
                    }, f = function () {
                        function t(t, e) {
                            this._config = e, this._didWarmUp = !1, this._cacheMap = {}, this._cacheMapCombined = {}, this._currentRowY = 0, this._currentRowX = 0, this._currentRowHeight = 0, this.hasCanvasChanged = !1, this._workBoundingBox = {
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0
                            }, this._workAttributeData = new s.AttributeData, this.cacheCanvas = t.createElement("canvas"), this.cacheCanvas.width = h, this.cacheCanvas.height = c, this._cacheCtx = (0, n.throwIfFalsy)(this.cacheCanvas.getContext("2d", {alpha: !0})), this._tmpCanvas = t.createElement("canvas"), this._tmpCanvas.width = 4 * this._config.scaledCellWidth + 4, this._tmpCanvas.height = this._config.scaledCellHeight + 4, this._tmpCtx = (0, n.throwIfFalsy)(this._tmpCanvas.getContext("2d", {alpha: this._config.allowTransparency}))
                        }

                        return t.prototype.dispose = function () {
                            this.cacheCanvas.parentElement && this.cacheCanvas.parentElement.removeChild(this.cacheCanvas)
                        }, t.prototype.warmUp = function () {
                            this._didWarmUp || (this._doWarmUp(), this._didWarmUp = !0)
                        }, t.prototype._doWarmUp = function () {
                            for (var t, e, i = 33; i < 126; i++) {
                                var r = this._drawToCache(i, o.DEFAULT_COLOR, o.DEFAULT_COLOR);
                                this._cacheMap[i] = ((t = {})[o.DEFAULT_COLOR] = ((e = {})[o.DEFAULT_COLOR] = r, e), t)
                            }
                        }, t.prototype.beginFrame = function () {
                            return this._currentRowY > _ && (this.clearTexture(), this.warmUp(), !0)
                        }, t.prototype.clearTexture = function () {
                            0 === this._currentRowX && 0 === this._currentRowY || (this._cacheCtx.clearRect(0, 0, h, c), this._cacheMap = {}, this._cacheMapCombined = {}, this._currentRowHeight = 0, this._currentRowX = 0, this._currentRowY = 0, this._didWarmUp = !1)
                        }, t.prototype.getRasterizedGlyphCombinedChar = function (t, e, i) {
                            var r, o = this._cacheMapCombined[t];
                            o || (o = {}, this._cacheMapCombined[t] = o);
                            var n = o[e];
                            return n && (r = n[i]), r || (r = this._drawToCache(t, e, i), o[e] || (o[e] = {}), o[e][i] = r), r
                        }, t.prototype.getRasterizedGlyph = function (t, e, i) {
                            var r, o = this._cacheMap[t];
                            o || (o = {}, this._cacheMap[t] = o);
                            var n = o[e];
                            return n && (r = n[i]), r || (r = this._drawToCache(t, e, i), o[e] || (o[e] = {}), o[e][i] = r), r
                        }, t.prototype._getColorFromAnsiIndex = function (t) {
                            if (t >= this._config.colors.ansi.length) throw new Error("No color found for idx " + t);
                            return this._config.colors.ansi[t]
                        }, t.prototype._getBackgroundColor = function (t, e, i) {
                            if (this._config.allowTransparency) return d;
                            switch (t) {
                                case 16777216:
                                case 33554432:
                                    return this._getColorFromAnsiIndex(e);
                                case 50331648:
                                    var r = s.AttributeData.toColorRGB(e);
                                    return {rgba: e << 8, css: "#" + g(r[0]) + g(r[1]) + g(r[2])};
                                default:
                                    return i ? this._config.colors.foreground : this._config.colors.background
                            }
                        }, t.prototype._getForegroundCss = function (t, e, i, r, o, n, l, h) {
                            var c = this._getMinimumContrastCss(t, e, i, r, o, n, l, h);
                            if (c) return c;
                            switch (o) {
                                case 16777216:
                                case 33554432:
                                    return this._config.drawBoldTextInBrightColors && h && n < 8 && (n += 8), this._getColorFromAnsiIndex(n).css;
                                case 50331648:
                                    var _ = s.AttributeData.toColorRGB(n);
                                    return a.channels.toCss(_[0], _[1], _[2]);
                                default:
                                    if (l) {
                                        var d = this._config.colors.background.css;
                                        return 9 === d.length ? d.substr(0, 7) : d
                                    }
                                    return this._config.colors.foreground.css
                            }
                        }, t.prototype._resolveBackgroundRgba = function (t, e, i) {
                            switch (t) {
                                case 16777216:
                                case 33554432:
                                    return this._getColorFromAnsiIndex(e).rgba;
                                case 50331648:
                                    return e << 8;
                                default:
                                    return i ? this._config.colors.foreground.rgba : this._config.colors.background.rgba
                            }
                        }, t.prototype._resolveForegroundRgba = function (t, e, i, r) {
                            switch (t) {
                                case 16777216:
                                case 33554432:
                                    return this._config.drawBoldTextInBrightColors && r && e < 8 && (e += 8), this._getColorFromAnsiIndex(e).rgba;
                                case 50331648:
                                    return e << 8;
                                default:
                                    return i ? this._config.colors.background.rgba : this._config.colors.foreground.rgba
                            }
                        }, t.prototype._getMinimumContrastCss = function (t, e, i, r, o, n, s, l) {
                            if (1 !== this._config.minimumContrastRatio) {
                                var h = this._config.colors.contrastCache.getCss(t, r);
                                if (void 0 !== h) return h || void 0;
                                var c = this._resolveBackgroundRgba(e, i, s), _ = this._resolveForegroundRgba(o, n, s, l),
                                    d = a.rgba.ensureContrastRatio(c, _, this._config.minimumContrastRatio);
                                if (d) {
                                    var u = a.channels.toCss(d >> 24 & 255, d >> 16 & 255, d >> 8 & 255);
                                    return this._config.colors.contrastCache.setCss(t, r, u), u
                                }
                                this._config.colors.contrastCache.setCss(t, r, null)
                            }
                        }, t.prototype._drawToCache = function (t, e, i) {
                            var o = "number" == typeof t ? String.fromCharCode(t) : t;
                            this.hasCanvasChanged = !0;
                            var n = this._config.scaledCharWidth * Math.max(o.length, 2) + 4;
                            if (this._tmpCanvas.width < n && (this._tmpCanvas.width = n), this._tmpCtx.save(), this._workAttributeData.fg = i, this._workAttributeData.bg = e, this._workAttributeData.isInvisible()) return u;
                            var s = !!this._workAttributeData.isBold(), a = !!this._workAttributeData.isInverse(),
                                _ = !!this._workAttributeData.isDim(), d = !!this._workAttributeData.isItalic(),
                                f = !!this._workAttributeData.isUnderline(),
                                g = !!this._workAttributeData.isStrikethrough(), v = this._workAttributeData.getFgColor(),
                                C = this._workAttributeData.getFgColorMode(), y = this._workAttributeData.getBgColor(),
                                m = this._workAttributeData.getBgColorMode();
                            if (a) {
                                var L = v;
                                v = y, y = L;
                                var w = C;
                                C = m, m = w
                            }
                            var b = this._getBackgroundColor(m, y, a);
                            this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = b.css, this._tmpCtx.fillRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.globalCompositeOperation = "source-over";
                            var R = s ? this._config.fontWeightBold : this._config.fontWeight, M = d ? "italic" : "";
                            this._tmpCtx.font = M + " " + R + " " + this._config.fontSize * this._config.devicePixelRatio + "px " + this._config.fontFamily, this._tmpCtx.textBaseline = r.TEXT_BASELINE, this._tmpCtx.fillStyle = this._getForegroundCss(e, m, y, i, C, v, a, s), _ && (this._tmpCtx.globalAlpha = r.DIM_OPACITY);
                            var x = !1;
                            if (1 === o.length) {
                                var A = o.charCodeAt(0);
                                A >= 57504 && A <= 57558 && (x = !0)
                            }
                            var E = x ? 0 : 2, D = !1;
                            if (!1 !== this._config.customGlyphs && (D = (0, l.tryDrawCustomChar)(this._tmpCtx, o, E, E, this._config.scaledCellWidth, this._config.scaledCellHeight)), D || this._tmpCtx.fillText(o, E, E + this._config.scaledCharHeight), "_" === o && !this._config.allowTransparency) {
                                var T = p(this._tmpCtx.getImageData(E, E, this._config.scaledCellWidth, this._config.scaledCellHeight), b);
                                if (T) for (var S = 1; S <= 5 && (this._tmpCtx.clearRect(0, 0, this._tmpCanvas.width, this._tmpCanvas.height), this._tmpCtx.fillText(o, E, E + this._config.scaledCharHeight - S), T = p(this._tmpCtx.getImageData(E, E, this._config.scaledCellWidth, this._config.scaledCellHeight), b)); S++) ;
                            }
                            if (f || g) {
                                var F = Math.max(1, Math.floor(this._config.fontSize / 10)),
                                    O = this._tmpCtx.lineWidth % 2 == 1 ? .5 : 0;
                                this._tmpCtx.lineWidth = F, this._tmpCtx.strokeStyle = this._tmpCtx.fillStyle, this._tmpCtx.beginPath(), f && (this._tmpCtx.moveTo(E, E + this._config.scaledCharHeight - O), this._tmpCtx.lineTo(E + this._config.scaledCharWidth, E + this._config.scaledCharHeight - O)), g && (this._tmpCtx.moveTo(E, E + Math.floor(this._config.scaledCharHeight / 2) - O), this._tmpCtx.lineTo(E + this._config.scaledCharWidth, E + Math.floor(this._config.scaledCharHeight / 2) - O)), this._tmpCtx.stroke(), this._tmpCtx.closePath()
                            }
                            this._tmpCtx.restore();
                            var B = this._tmpCtx.getImageData(0, 0, this._tmpCanvas.width, this._tmpCanvas.height);
                            if (p(B, b)) return u;
                            var I = this._findGlyphBoundingBox(B, this._workBoundingBox, n, x, D),
                                P = this._clipImageData(B, this._workBoundingBox);
                            return this._currentRowX + this._config.scaledCharWidth > h && (this._currentRowX = 0, this._currentRowY += this._currentRowHeight, this._currentRowHeight = 0), I.texturePosition.x = this._currentRowX, I.texturePosition.y = this._currentRowY, I.texturePositionClipSpace.x = this._currentRowX / h, I.texturePositionClipSpace.y = this._currentRowY / c, this._currentRowHeight = Math.max(this._currentRowHeight, I.size.y), this._currentRowX += I.size.x, this._cacheCtx.putImageData(P, I.texturePosition.x, I.texturePosition.y), I
                        }, t.prototype._findGlyphBoundingBox = function (t, e, i, r, o) {
                            e.top = 0;
                            for (var n = r ? this._config.scaledCharHeight : this._tmpCanvas.height, s = r ? this._config.scaledCharWidth : i, a = !1, l = 0; l < n; l++) {
                                for (var _ = 0; _ < s; _++) {
                                    var d = l * this._tmpCanvas.width * 4 + 4 * _ + 3;
                                    if (0 !== t.data[d]) {
                                        e.top = l, a = !0;
                                        break
                                    }
                                }
                                if (a) break
                            }
                            for (e.left = 0, a = !1, _ = 0; _ < s; _++) {
                                for (l = 0; l < n; l++) if (d = l * this._tmpCanvas.width * 4 + 4 * _ + 3, 0 !== t.data[d]) {
                                    e.left = _, a = !0;
                                    break
                                }
                                if (a) break
                            }
                            for (e.right = s, a = !1, _ = s - 1; _ >= 0; _--) {
                                for (l = 0; l < n; l++) if (d = l * this._tmpCanvas.width * 4 + 4 * _ + 3, 0 !== t.data[d]) {
                                    e.right = _, a = !0;
                                    break
                                }
                                if (a) break
                            }
                            for (e.bottom = n, a = !1, l = n - 1; l >= 0; l--) {
                                for (_ = 0; _ < s; _++) if (d = l * this._tmpCanvas.width * 4 + 4 * _ + 3, 0 !== t.data[d]) {
                                    e.bottom = l, a = !0;
                                    break
                                }
                                if (a) break
                            }
                            return {
                                texturePosition: {x: 0, y: 0},
                                texturePositionClipSpace: {x: 0, y: 0},
                                size: {x: e.right - e.left + 1, y: e.bottom - e.top + 1},
                                sizeClipSpace: {x: (e.right - e.left + 1) / h, y: (e.bottom - e.top + 1) / c},
                                offset: {
                                    x: -e.left + (r ? 0 : 2) + (o ? Math.floor(this._config.letterSpacing / 2) : 0),
                                    y: -e.top + (r ? 0 : 2) + (o ? 1 === this._config.lineHeight ? 0 : Math.round((this._config.scaledCellHeight - this._config.scaledCharHeight) / 2) : 0)
                                }
                            }
                        }, t.prototype._clipImageData = function (t, e) {
                            for (var i = e.right - e.left + 1, r = e.bottom - e.top + 1, o = new Uint8ClampedArray(i * r * 4), n = e.top; n <= e.bottom; n++) for (var s = e.left; s <= e.right; s++) {
                                var a = n * this._tmpCanvas.width * 4 + 4 * s, l = (n - e.top) * i * 4 + 4 * (s - e.left);
                                o[l] = t.data[a], o[l + 1] = t.data[a + 1], o[l + 2] = t.data[a + 2], o[l + 3] = t.data[a + 3]
                            }
                            return new ImageData(o, i, r)
                        }, t
                    }();

                function p(t, e) {
                    for (var i = !0, r = e.rgba >>> 24, o = e.rgba >>> 16 & 255, n = e.rgba >>> 8 & 255, s = 0; s < t.data.length; s += 4) t.data[s] === r && t.data[s + 1] === o && t.data[s + 2] === n ? t.data[s + 3] = 0 : i = !1;
                    return i
                }

                function g(t) {
                    var e = t.toString(16);
                    return e.length < 2 ? "0" + e : e
                }

                e.WebglCharAtlas = f
            }, 592: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.BaseRenderLayer = void 0;
                var r = i(713), o = i(499), n = i(381), s = function () {
                    function t(t, e, i, r, o) {
                        this._container = t, this._alpha = r, this._colors = o, this._scaledCharWidth = 0, this._scaledCharHeight = 0, this._scaledCellWidth = 0, this._scaledCellHeight = 0, this._scaledCharLeft = 0, this._scaledCharTop = 0, this._canvas = document.createElement("canvas"), this._canvas.classList.add("xterm-" + e + "-layer"), this._canvas.style.zIndex = i.toString(), this._initCanvas(), this._container.appendChild(this._canvas)
                    }

                    return t.prototype.dispose = function () {
                        this._container.removeChild(this._canvas), this._charAtlas && this._charAtlas.dispose()
                    }, t.prototype._initCanvas = function () {
                        this._ctx = (0, n.throwIfFalsy)(this._canvas.getContext("2d", {alpha: this._alpha})), this._alpha || this._clearAll()
                    }, t.prototype.onOptionsChanged = function (t) {
                    }, t.prototype.onBlur = function (t) {
                    }, t.prototype.onFocus = function (t) {
                    }, t.prototype.onCursorMove = function (t) {
                    }, t.prototype.onGridChanged = function (t, e, i) {
                    }, t.prototype.onSelectionChanged = function (t, e, i, r) {
                        void 0 === r && (r = !1)
                    }, t.prototype.setColors = function (t, e) {
                        this._refreshCharAtlas(t, e)
                    }, t.prototype._setTransparency = function (t, e) {
                        if (e !== this._alpha) {
                            var i = this._canvas;
                            this._alpha = e, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, i), this._refreshCharAtlas(t, this._colors), this.onGridChanged(t, 0, t.rows - 1)
                        }
                    }, t.prototype._refreshCharAtlas = function (t, e) {
                        this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0 || (this._charAtlas = (0, r.acquireCharAtlas)(t, e, this._scaledCellWidth, this._scaledCellHeight, this._scaledCharWidth, this._scaledCharHeight), this._charAtlas.warmUp())
                    }, t.prototype.resize = function (t, e) {
                        this._scaledCellWidth = e.scaledCellWidth, this._scaledCellHeight = e.scaledCellHeight, this._scaledCharWidth = e.scaledCharWidth, this._scaledCharHeight = e.scaledCharHeight, this._scaledCharLeft = e.scaledCharLeft, this._scaledCharTop = e.scaledCharTop, this._canvas.width = e.scaledCanvasWidth, this._canvas.height = e.scaledCanvasHeight, this._canvas.style.width = e.canvasWidth + "px", this._canvas.style.height = e.canvasHeight + "px", this._alpha || this._clearAll(), this._refreshCharAtlas(t, this._colors)
                    }, t.prototype._fillCells = function (t, e, i, r) {
                        this._ctx.fillRect(t * this._scaledCellWidth, e * this._scaledCellHeight, i * this._scaledCellWidth, r * this._scaledCellHeight)
                    }, t.prototype._fillBottomLineAtCells = function (t, e, i) {
                        void 0 === i && (i = 1), this._ctx.fillRect(t * this._scaledCellWidth, (e + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, i * this._scaledCellWidth, window.devicePixelRatio)
                    }, t.prototype._fillLeftLineAtCell = function (t, e, i) {
                        this._ctx.fillRect(t * this._scaledCellWidth, e * this._scaledCellHeight, window.devicePixelRatio * i, this._scaledCellHeight)
                    }, t.prototype._strokeRectAtCell = function (t, e, i, r) {
                        this._ctx.lineWidth = window.devicePixelRatio, this._ctx.strokeRect(t * this._scaledCellWidth + window.devicePixelRatio / 2, e * this._scaledCellHeight + window.devicePixelRatio / 2, i * this._scaledCellWidth - window.devicePixelRatio, r * this._scaledCellHeight - window.devicePixelRatio)
                    }, t.prototype._clearAll = function () {
                        this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height))
                    }, t.prototype._clearCells = function (t, e, i, r) {
                        this._alpha ? this._ctx.clearRect(t * this._scaledCellWidth, e * this._scaledCellHeight, i * this._scaledCellWidth, r * this._scaledCellHeight) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(t * this._scaledCellWidth, e * this._scaledCellHeight, i * this._scaledCellWidth, r * this._scaledCellHeight))
                    }, t.prototype._fillCharTrueColor = function (t, e, i, r) {
                        this._ctx.font = this._getFont(t, !1, !1), this._ctx.textBaseline = o.TEXT_BASELINE, this._clipRow(t, r), this._ctx.fillText(e.getChars(), i * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight)
                    }, t.prototype._clipRow = function (t, e) {
                        this._ctx.beginPath(), this._ctx.rect(0, e * this._scaledCellHeight, t.cols * this._scaledCellWidth, this._scaledCellHeight), this._ctx.clip()
                    }, t.prototype._getFont = function (t, e, i) {
                        return (i ? "italic" : "") + " " + (e ? t.getOption("fontWeightBold") : t.getOption("fontWeight")) + " " + t.getOption("fontSize") * window.devicePixelRatio + "px " + t.getOption("fontFamily")
                    }, t
                }();
                e.BaseRenderLayer = s
            }, 461: function (t, e, i) {
                var r, o = this && this.__extends || (r = function (t, e) {
                    return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    }, r(t, e)
                }, function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function i() {
                        this.constructor = t
                    }

                    r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                });
                Object.defineProperty(e, "__esModule", {value: !0}), e.CursorRenderLayer = void 0;
                var n = i(592), s = i(782), a = 600, l = function (t) {
                    function e(e, i, r, o, n, a) {
                        var l = t.call(this, i, "cursor", r, !0, o) || this;
                        return l._terminal = n, l._onRequestRefreshRowsEvent = a, l._cell = new s.CellData, l._state = {
                            x: 0,
                            y: 0,
                            isFocused: !1,
                            style: "",
                            width: 0
                        }, l._cursorRenderers = {
                            bar: l._renderBarCursor.bind(l),
                            block: l._renderBlockCursor.bind(l),
                            underline: l._renderUnderlineCursor.bind(l)
                        }, l.onOptionsChanged(e), l
                    }

                    return o(e, t), e.prototype.resize = function (e, i) {
                        t.prototype.resize.call(this, e, i), this._state = {
                            x: 0,
                            y: 0,
                            isFocused: !1,
                            style: "",
                            width: 0
                        }
                    }, e.prototype.reset = function (t) {
                        var e;
                        this._clearCursor(), null === (e = this._cursorBlinkStateManager) || void 0 === e || e.restartBlinkAnimation(t), this.onOptionsChanged(t)
                    }, e.prototype.onBlur = function (t) {
                        var e;
                        null === (e = this._cursorBlinkStateManager) || void 0 === e || e.pause(), this._onRequestRefreshRowsEvent.fire({
                            start: t.buffer.active.cursorY,
                            end: t.buffer.active.cursorY
                        })
                    }, e.prototype.onFocus = function (t) {
                        var e;
                        null === (e = this._cursorBlinkStateManager) || void 0 === e || e.resume(t), this._onRequestRefreshRowsEvent.fire({
                            start: t.buffer.active.cursorY,
                            end: t.buffer.active.cursorY
                        })
                    }, e.prototype.onOptionsChanged = function (t) {
                        var e, i = this;
                        t.getOption("cursorBlink") ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new h(t, (function () {
                            i._render(t, !0)
                        }))) : (null === (e = this._cursorBlinkStateManager) || void 0 === e || e.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRefreshRowsEvent.fire({
                            start: t.buffer.active.cursorY,
                            end: t.buffer.active.cursorY
                        })
                    }, e.prototype.onCursorMove = function (t) {
                        var e;
                        null === (e = this._cursorBlinkStateManager) || void 0 === e || e.restartBlinkAnimation(t)
                    }, e.prototype.onGridChanged = function (t, e, i) {
                        !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(t, !1) : this._cursorBlinkStateManager.restartBlinkAnimation(t)
                    }, e.prototype._render = function (t, e) {
                        if (this._terminal.coreService.isCursorInitialized && !this._terminal.coreService.isCursorHidden) {
                            var i = t.buffer.active.baseY + t.buffer.active.cursorY, r = i - t.buffer.active.viewportY,
                                o = Math.min(t.buffer.active.cursorX, t.cols - 1);
                            if (r < 0 || r >= t.rows) this._clearCursor(); else if (t._core.buffer.lines.get(i).loadCell(o, this._cell), void 0 !== this._cell.content) {
                                if (!c(t)) {
                                    this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css;
                                    var n = t.getOption("cursorStyle");
                                    return n && "block" !== n ? this._cursorRenderers[n](t, o, r, this._cell) : this._renderBlurCursor(t, o, r, this._cell), this._ctx.restore(), this._state.x = o, this._state.y = r, this._state.isFocused = !1, this._state.style = n, void (this._state.width = this._cell.getWidth())
                                }
                                if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                                    if (this._state) {
                                        if (this._state.x === o && this._state.y === r && this._state.isFocused === c(t) && this._state.style === t.getOption("cursorStyle") && this._state.width === this._cell.getWidth()) return;
                                        this._clearCursor()
                                    }
                                    this._ctx.save(), this._cursorRenderers[t.getOption("cursorStyle") || "block"](t, o, r, this._cell), this._ctx.restore(), this._state.x = o, this._state.y = r, this._state.isFocused = !1, this._state.style = t.getOption("cursorStyle"), this._state.width = this._cell.getWidth()
                                } else this._clearCursor()
                            }
                        } else this._clearCursor()
                    }, e.prototype._clearCursor = function () {
                        this._state && (window.devicePixelRatio < 1 ? this._clearAll() : this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = {
                            x: 0,
                            y: 0,
                            isFocused: !1,
                            style: "",
                            width: 0
                        })
                    }, e.prototype._renderBarCursor = function (t, e, i, r) {
                        this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillLeftLineAtCell(e, i, t.getOption("cursorWidth")), this._ctx.restore()
                    }, e.prototype._renderBlockCursor = function (t, e, i, r) {
                        this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillCells(e, i, r.getWidth(), 1), this._ctx.fillStyle = this._colors.cursorAccent.css, this._fillCharTrueColor(t, r, e, i), this._ctx.restore()
                    }, e.prototype._renderUnderlineCursor = function (t, e, i, r) {
                        this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillBottomLineAtCells(e, i), this._ctx.restore()
                    }, e.prototype._renderBlurCursor = function (t, e, i, r) {
                        this._ctx.save(), this._ctx.strokeStyle = this._colors.cursor.css, this._strokeRectAtCell(e, i, r.getWidth(), 1), this._ctx.restore()
                    }, e
                }(n.BaseRenderLayer);
                e.CursorRenderLayer = l;
                var h = function () {
                    function t(t, e) {
                        this._renderCallback = e, this.isCursorVisible = !0, c(t) && this._restartInterval()
                    }

                    return Object.defineProperty(t.prototype, "isPaused", {
                        get: function () {
                            return !(this._blinkStartTimeout || this._blinkInterval)
                        }, enumerable: !1, configurable: !0
                    }), t.prototype.dispose = function () {
                        this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
                    }, t.prototype.restartBlinkAnimation = function (t) {
                        var e = this;
                        this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = !0, this._animationFrame || (this._animationFrame = window.requestAnimationFrame((function () {
                            e._renderCallback(), e._animationFrame = void 0
                        }))))
                    }, t.prototype._restartInterval = function (t) {
                        var e = this;
                        void 0 === t && (t = a), this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout = window.setTimeout((function () {
                            if (e._animationTimeRestarted) {
                                var t = a - (Date.now() - e._animationTimeRestarted);
                                if (e._animationTimeRestarted = void 0, t > 0) return void e._restartInterval(t)
                            }
                            e.isCursorVisible = !1, e._animationFrame = window.requestAnimationFrame((function () {
                                e._renderCallback(), e._animationFrame = void 0
                            })), e._blinkInterval = window.setInterval((function () {
                                if (e._animationTimeRestarted) {
                                    var t = a - (Date.now() - e._animationTimeRestarted);
                                    return e._animationTimeRestarted = void 0, void e._restartInterval(t)
                                }
                                e.isCursorVisible = !e.isCursorVisible, e._animationFrame = window.requestAnimationFrame((function () {
                                    e._renderCallback(), e._animationFrame = void 0
                                }))
                            }), a)
                        }), t)
                    }, t.prototype.pause = function () {
                        this.isCursorVisible = !0, this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0)
                    }, t.prototype.resume = function (t) {
                        this.pause(), this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation(t)
                    }, t
                }();

                function c(t) {
                    return document.activeElement === t.textarea && document.hasFocus()
                }
            }, 733: function (t, e, i) {
                var r, o = this && this.__extends || (r = function (t, e) {
                    return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    }, r(t, e)
                }, function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function i() {
                        this.constructor = t
                    }

                    r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                });
                Object.defineProperty(e, "__esModule", {value: !0}), e.LinkRenderLayer = void 0;
                var n = i(592), s = i(499), a = i(433), l = function (t) {
                    function e(e, i, r, o) {
                        var n = t.call(this, e, "link", i, !0, r) || this;
                        return o.linkifier.onShowLinkUnderline((function (t) {
                            return n._onShowLinkUnderline(t)
                        })), o.linkifier.onHideLinkUnderline((function (t) {
                            return n._onHideLinkUnderline(t)
                        })), o.linkifier2.onShowLinkUnderline((function (t) {
                            return n._onShowLinkUnderline(t)
                        })), o.linkifier2.onHideLinkUnderline((function (t) {
                            return n._onHideLinkUnderline(t)
                        })), n
                    }

                    return o(e, t), e.prototype.resize = function (e, i) {
                        t.prototype.resize.call(this, e, i), this._state = void 0
                    }, e.prototype.reset = function (t) {
                        this._clearCurrentLink()
                    }, e.prototype._clearCurrentLink = function () {
                        if (this._state) {
                            this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
                            var t = this._state.y2 - this._state.y1 - 1;
                            t > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, t), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0
                        }
                    }, e.prototype._onShowLinkUnderline = function (t) {
                        if (t.fg === s.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._colors.background.css : void 0 !== t.fg && (0, a.is256Color)(t.fg) ? this._ctx.fillStyle = this._colors.ansi[t.fg].css : this._ctx.fillStyle = this._colors.foreground.css, t.y1 === t.y2) this._fillBottomLineAtCells(t.x1, t.y1, t.x2 - t.x1); else {
                            this._fillBottomLineAtCells(t.x1, t.y1, t.cols - t.x1);
                            for (var e = t.y1 + 1; e < t.y2; e++) this._fillBottomLineAtCells(0, e, t.cols);
                            this._fillBottomLineAtCells(0, t.y2, t.x2)
                        }
                        this._state = t
                    }, e.prototype._onHideLinkUnderline = function (t) {
                        this._clearCurrentLink()
                    }, e
                }(n.BaseRenderLayer);
                e.LinkRenderLayer = l
            }, 742: (t, e) => {
                var i, r, o, n;

                function s(t) {
                    var e = t.toString(16);
                    return e.length < 2 ? "0" + e : e
                }

                function a(t, e) {
                    return t < e ? (e + .05) / (t + .05) : (t + .05) / (e + .05)
                }

                Object.defineProperty(e, "__esModule", {value: !0}), e.contrastRatio = e.toPaddedHex = e.rgba = e.rgb = e.css = e.color = e.channels = void 0, function (t) {
                    t.toCss = function (t, e, i, r) {
                        return void 0 !== r ? "#" + s(t) + s(e) + s(i) + s(r) : "#" + s(t) + s(e) + s(i)
                    }, t.toRgba = function (t, e, i, r) {
                        return void 0 === r && (r = 255), (t << 24 | e << 16 | i << 8 | r) >>> 0
                    }
                }(i = e.channels || (e.channels = {})), (r = e.color || (e.color = {})).blend = function (t, e) {
                    var r = (255 & e.rgba) / 255;
                    if (1 === r) return {css: e.css, rgba: e.rgba};
                    var o = e.rgba >> 24 & 255, n = e.rgba >> 16 & 255, s = e.rgba >> 8 & 255, a = t.rgba >> 24 & 255,
                        l = t.rgba >> 16 & 255, h = t.rgba >> 8 & 255, c = a + Math.round((o - a) * r),
                        _ = l + Math.round((n - l) * r), d = h + Math.round((s - h) * r);
                    return {css: i.toCss(c, _, d), rgba: i.toRgba(c, _, d)}
                }, r.isOpaque = function (t) {
                    return 255 == (255 & t.rgba)
                }, r.ensureContrastRatio = function (t, e, i) {
                    var r = n.ensureContrastRatio(t.rgba, e.rgba, i);
                    if (r) return n.toColor(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255)
                }, r.opaque = function (t) {
                    var e = (255 | t.rgba) >>> 0, r = n.toChannels(e), o = r[0], s = r[1], a = r[2];
                    return {css: i.toCss(o, s, a), rgba: e}
                }, r.opacity = function (t, e) {
                    var r = Math.round(255 * e), o = n.toChannels(t.rgba), s = o[0], a = o[1], l = o[2];
                    return {css: i.toCss(s, a, l, r), rgba: i.toRgba(s, a, l, r)}
                }, (e.css || (e.css = {})).toColor = function (t) {
                    switch (t.length) {
                        case 7:
                            return {css: t, rgba: (parseInt(t.slice(1), 16) << 8 | 255) >>> 0};
                        case 9:
                            return {css: t, rgba: parseInt(t.slice(1), 16) >>> 0}
                    }
                    throw new Error("css.toColor: Unsupported css format")
                }, function (t) {
                    function e(t, e, i) {
                        var r = t / 255, o = e / 255, n = i / 255;
                        return .2126 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)) + .7152 * (o <= .03928 ? o / 12.92 : Math.pow((o + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4))
                    }

                    t.relativeLuminance = function (t) {
                        return e(t >> 16 & 255, t >> 8 & 255, 255 & t)
                    }, t.relativeLuminance2 = e
                }(o = e.rgb || (e.rgb = {})), function (t) {
                    function e(t, e, i) {
                        for (var r = t >> 24 & 255, n = t >> 16 & 255, s = t >> 8 & 255, l = e >> 24 & 255, h = e >> 16 & 255, c = e >> 8 & 255, _ = a(o.relativeLuminance2(l, c, h), o.relativeLuminance2(r, n, s)); _ < i && (l > 0 || h > 0 || c > 0);) l -= Math.max(0, Math.ceil(.1 * l)), h -= Math.max(0, Math.ceil(.1 * h)), c -= Math.max(0, Math.ceil(.1 * c)), _ = a(o.relativeLuminance2(l, c, h), o.relativeLuminance2(r, n, s));
                        return (l << 24 | h << 16 | c << 8 | 255) >>> 0
                    }

                    function r(t, e, i) {
                        for (var r = t >> 24 & 255, n = t >> 16 & 255, s = t >> 8 & 255, l = e >> 24 & 255, h = e >> 16 & 255, c = e >> 8 & 255, _ = a(o.relativeLuminance2(l, c, h), o.relativeLuminance2(r, n, s)); _ < i && (l < 255 || h < 255 || c < 255);) l = Math.min(255, l + Math.ceil(.1 * (255 - l))), h = Math.min(255, h + Math.ceil(.1 * (255 - h))), c = Math.min(255, c + Math.ceil(.1 * (255 - c))), _ = a(o.relativeLuminance2(l, c, h), o.relativeLuminance2(r, n, s));
                        return (l << 24 | h << 16 | c << 8 | 255) >>> 0
                    }

                    t.ensureContrastRatio = function (t, i, n) {
                        var s = o.relativeLuminance(t >> 8), l = o.relativeLuminance(i >> 8);
                        if (a(s, l) < n) return l < s ? e(t, i, n) : r(t, i, n)
                    }, t.reduceLuminance = e, t.increaseLuminance = r, t.toChannels = function (t) {
                        return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t]
                    }, t.toColor = function (t, e, r) {
                        return {css: i.toCss(t, e, r), rgba: i.toRgba(t, e, r)}
                    }
                }(n = e.rgba || (e.rgba = {})), e.toPaddedHex = s, e.contrastRatio = a
            }, 820: (t, e) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.addDisposableDomListener = void 0, e.addDisposableDomListener = function (t, e, i, r) {
                    t.addEventListener(e, i, r);
                    var o = !1;
                    return {
                        dispose: function () {
                            o || (o = !0, t.removeEventListener(e, i, r))
                        }
                    }
                }
            }, 14: (t, e, i) => {
                var r, o, n, s, a, l, h, c, _, d, u, f, p, g, v, C, y, m, L, w, b, R, M, x, A, E, D, T, S, F, O, B, I,
                    P, H, k, W, U, N, j, G, z, Y, X, q, V, J, K, Q, Z, $, tt, et, it, rt, ot, nt, st, at, lt, ht, ct,
                    _t, dt, ut, ft, pt, gt, vt, Ct, yt, mt, Lt, wt, bt, Rt, Mt, xt, At, Et, Dt, Tt, St, Ft, Ot, Bt, It,
                    Pt, Ht, kt, Wt, Ut, Nt, jt, Gt, zt, Yt, Xt, qt, Vt, Jt, Kt, Qt, Zt, $t, te, ee, ie, re, oe, ne, se,
                    ae, le, he, ce, _e, de, ue, fe, pe, ge, ve, Ce, ye, me, Le, we;
                Object.defineProperty(e, "__esModule", {value: !0}), e.tryDrawCustomChar = e.boxDrawingDefinitions = e.blockElementDefinitions = void 0;
                var be = i(634);
                e.blockElementDefinitions = {
                    "▀": [{x: 0, y: 0, w: 8, h: 4}],
                    "▁": [{x: 0, y: 7, w: 8, h: 1}],
                    "▂": [{x: 0, y: 6, w: 8, h: 2}],
                    "▃": [{x: 0, y: 5, w: 8, h: 3}],
                    "▄": [{x: 0, y: 4, w: 8, h: 4}],
                    "▅": [{x: 0, y: 3, w: 8, h: 5}],
                    "▆": [{x: 0, y: 2, w: 8, h: 6}],
                    "▇": [{x: 0, y: 1, w: 8, h: 7}],
                    "█": [{x: 0, y: 0, w: 8, h: 8}],
                    "▉": [{x: 0, y: 0, w: 7, h: 8}],
                    "▊": [{x: 0, y: 0, w: 6, h: 8}],
                    "▋": [{x: 0, y: 0, w: 5, h: 8}],
                    "▌": [{x: 0, y: 0, w: 4, h: 8}],
                    "▍": [{x: 0, y: 0, w: 3, h: 8}],
                    "▎": [{x: 0, y: 0, w: 2, h: 8}],
                    "▏": [{x: 0, y: 0, w: 1, h: 8}],
                    "▐": [{x: 4, y: 0, w: 4, h: 8}],
                    "▔": [{x: 0, y: 0, w: 9, h: 1}],
                    "▕": [{x: 7, y: 0, w: 1, h: 8}],
                    "▖": [{x: 0, y: 4, w: 4, h: 4}],
                    "▗": [{x: 4, y: 4, w: 4, h: 4}],
                    "▘": [{x: 0, y: 0, w: 4, h: 4}],
                    "▙": [{x: 0, y: 0, w: 4, h: 8}, {x: 0, y: 4, w: 8, h: 4}],
                    "▚": [{x: 0, y: 0, w: 4, h: 4}, {x: 4, y: 4, w: 4, h: 4}],
                    "▛": [{x: 0, y: 0, w: 4, h: 8}, {x: 0, y: 0, w: 4, h: 8}],
                    "▜": [{x: 0, y: 0, w: 8, h: 4}, {x: 4, y: 0, w: 4, h: 8}],
                    "▝": [{x: 4, y: 0, w: 4, h: 4}],
                    "▞": [{x: 4, y: 0, w: 4, h: 4}, {x: 0, y: 4, w: 4, h: 4}],
                    "▟": [{x: 4, y: 0, w: 4, h: 8}, {x: 0, y: 4, w: 8, h: 4}],
                    "🭰": [{x: 1, y: 0, w: 1, h: 8}],
                    "🭱": [{x: 2, y: 0, w: 1, h: 8}],
                    "🭲": [{x: 3, y: 0, w: 1, h: 8}],
                    "🭳": [{x: 4, y: 0, w: 1, h: 8}],
                    "🭴": [{x: 5, y: 0, w: 1, h: 8}],
                    "🭵": [{x: 6, y: 0, w: 1, h: 8}],
                    "🭶": [{x: 0, y: 1, w: 8, h: 1}],
                    "🭷": [{x: 0, y: 2, w: 8, h: 1}],
                    "🭸": [{x: 0, y: 3, w: 8, h: 1}],
                    "🭹": [{x: 0, y: 4, w: 8, h: 1}],
                    "🭺": [{x: 0, y: 5, w: 8, h: 1}],
                    "🭻": [{x: 0, y: 6, w: 8, h: 1}],
                    "🭼": [{x: 0, y: 0, w: 1, h: 8}, {x: 0, y: 7, w: 8, h: 1}],
                    "🭽": [{x: 0, y: 0, w: 1, h: 8}, {x: 0, y: 0, w: 8, h: 1}],
                    "🭾": [{x: 7, y: 0, w: 1, h: 8}, {x: 0, y: 0, w: 8, h: 1}],
                    "🭿": [{x: 7, y: 0, w: 1, h: 8}, {x: 0, y: 7, w: 8, h: 1}],
                    "🮀": [{x: 0, y: 0, w: 8, h: 1}, {x: 0, y: 7, w: 8, h: 1}],
                    "🮁": [{x: 0, y: 0, w: 8, h: 1}, {x: 0, y: 2, w: 8, h: 1}, {x: 0, y: 4, w: 8, h: 1}, {
                        x: 0,
                        y: 7,
                        w: 8,
                        h: 1
                    }],
                    "🮂": [{x: 0, y: 0, w: 8, h: 2}],
                    "🮃": [{x: 0, y: 0, w: 8, h: 3}],
                    "🮄": [{x: 0, y: 0, w: 8, h: 5}],
                    "🮅": [{x: 0, y: 0, w: 8, h: 6}],
                    "🮆": [{x: 0, y: 0, w: 8, h: 7}],
                    "🮇": [{x: 6, y: 0, w: 2, h: 8}],
                    "🮈": [{x: 5, y: 0, w: 3, h: 8}],
                    "🮉": [{x: 3, y: 0, w: 5, h: 8}],
                    "🮊": [{x: 2, y: 0, w: 6, h: 8}],
                    "🮋": [{x: 1, y: 0, w: 7, h: 8}],
                    "🮕": [{x: 0, y: 0, w: 2, h: 2}, {x: 4, y: 0, w: 2, h: 2}, {x: 2, y: 2, w: 2, h: 2}, {
                        x: 6,
                        y: 2,
                        w: 2,
                        h: 2
                    }, {x: 0, y: 4, w: 2, h: 2}, {x: 4, y: 4, w: 2, h: 2}, {x: 2, y: 6, w: 2, h: 2}, {
                        x: 6,
                        y: 6,
                        w: 2,
                        h: 2
                    }],
                    "🮖": [{x: 2, y: 0, w: 2, h: 2}, {x: 6, y: 0, w: 2, h: 2}, {x: 0, y: 2, w: 2, h: 2}, {
                        x: 4,
                        y: 2,
                        w: 2,
                        h: 2
                    }, {x: 2, y: 4, w: 2, h: 2}, {x: 6, y: 4, w: 2, h: 2}, {x: 0, y: 6, w: 2, h: 2}, {
                        x: 4,
                        y: 6,
                        w: 2,
                        h: 2
                    }],
                    "🮗": [{x: 0, y: 2, w: 8, h: 2}, {x: 0, y: 6, w: 8, h: 2}]
                };
                var Re = {
                    "░": [[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
                    "▒": [[1, 0], [0, 0], [0, 1], [0, 0]],
                    "▓": [[0, 1], [1, 1], [1, 0], [1, 1]]
                };
                e.boxDrawingDefinitions = {
                    "─": (r = {}, r[1] = "M0,.5 L1,.5", r),
                    "━": (o = {}, o[3] = "M0,.5 L1,.5", o),
                    "│": (n = {}, n[1] = "M.5,0 L.5,1", n),
                    "┃": (s = {}, s[3] = "M.5,0 L.5,1", s),
                    "┌": (a = {}, a[1] = "M0.5,1 L.5,.5 L1,.5", a),
                    "┏": (l = {}, l[3] = "M0.5,1 L.5,.5 L1,.5", l),
                    "┐": (h = {}, h[1] = "M0,.5 L.5,.5 L.5,1", h),
                    "┓": (c = {}, c[3] = "M0,.5 L.5,.5 L.5,1", c),
                    "└": (_ = {}, _[1] = "M.5,0 L.5,.5 L1,.5", _),
                    "┗": (d = {}, d[3] = "M.5,0 L.5,.5 L1,.5", d),
                    "┘": (u = {}, u[1] = "M.5,0 L.5,.5 L0,.5", u),
                    "┛": (f = {}, f[3] = "M.5,0 L.5,.5 L0,.5", f),
                    "├": (p = {}, p[1] = "M.5,0 L.5,1 M.5,.5 L1,.5", p),
                    "┣": (g = {}, g[3] = "M.5,0 L.5,1 M.5,.5 L1,.5", g),
                    "┤": (v = {}, v[1] = "M.5,0 L.5,1 M.5,.5 L0,.5", v),
                    "┫": (C = {}, C[3] = "M.5,0 L.5,1 M.5,.5 L0,.5", C),
                    "┬": (y = {}, y[1] = "M0,.5 L1,.5 M.5,.5 L.5,1", y),
                    "┳": (m = {}, m[3] = "M0,.5 L1,.5 M.5,.5 L.5,1", m),
                    "┴": (L = {}, L[1] = "M0,.5 L1,.5 M.5,.5 L.5,0", L),
                    "┻": (w = {}, w[3] = "M0,.5 L1,.5 M.5,.5 L.5,0", w),
                    "┼": (b = {}, b[1] = "M0,.5 L1,.5 M.5,0 L.5,1", b),
                    "╋": (R = {}, R[3] = "M0,.5 L1,.5 M.5,0 L.5,1", R),
                    "╴": (M = {}, M[1] = "M.5,.5 L0,.5", M),
                    "╸": (x = {}, x[3] = "M.5,.5 L0,.5", x),
                    "╵": (A = {}, A[1] = "M.5,.5 L.5,0", A),
                    "╹": (E = {}, E[3] = "M.5,.5 L.5,0", E),
                    "╶": (D = {}, D[1] = "M.5,.5 L1,.5", D),
                    "╺": (T = {}, T[3] = "M.5,.5 L1,.5", T),
                    "╷": (S = {}, S[1] = "M.5,.5 L.5,1", S),
                    "╻": (F = {}, F[3] = "M.5,.5 L.5,1", F),
                    "═": (O = {}, O[1] = function (t, e) {
                        return "M0," + (.5 - e) + " L1," + (.5 - e) + " M0," + (.5 + e) + " L1," + (.5 + e)
                    }, O),
                    "║": (B = {}, B[1] = function (t, e) {
                        return "M" + (.5 - t) + ",0 L" + (.5 - t) + ",1 M" + (.5 + t) + ",0 L" + (.5 + t) + ",1"
                    }, B),
                    "╒": (I = {}, I[1] = function (t, e) {
                        return "M.5,1 L.5," + (.5 - e) + " L1," + (.5 - e) + " M.5," + (.5 + e) + " L1," + (.5 + e)
                    }, I),
                    "╓": (P = {}, P[1] = function (t, e) {
                        return "M" + (.5 - t) + ",1 L" + (.5 - t) + ",.5 L1,.5 M" + (.5 + t) + ",.5 L" + (.5 + t) + ",1"
                    }, P),
                    "╔": (H = {}, H[1] = function (t, e) {
                        return "M1," + (.5 - e) + " L" + (.5 - t) + "," + (.5 - e) + " L" + (.5 - t) + ",1 M1," + (.5 + e) + " L" + (.5 + t) + "," + (.5 + e) + " L" + (.5 + t) + ",1"
                    }, H),
                    "╕": (k = {}, k[1] = function (t, e) {
                        return "M0," + (.5 - e) + " L.5," + (.5 - e) + " L.5,1 M0," + (.5 + e) + " L.5," + (.5 + e)
                    }, k),
                    "╖": (W = {}, W[1] = function (t, e) {
                        return "M" + (.5 + t) + ",1 L" + (.5 + t) + ",.5 L0,.5 M" + (.5 - t) + ",.5 L" + (.5 - t) + ",1"
                    }, W),
                    "╗": (U = {}, U[1] = function (t, e) {
                        return "M0," + (.5 + e) + " L" + (.5 - t) + "," + (.5 + e) + " L" + (.5 - t) + ",1 M0," + (.5 - e) + " L" + (.5 + t) + "," + (.5 - e) + " L" + (.5 + t) + ",1"
                    }, U),
                    "╘": (N = {}, N[1] = function (t, e) {
                        return "M.5,0 L.5," + (.5 + e) + " L1," + (.5 + e) + " M.5," + (.5 - e) + " L1," + (.5 - e)
                    }, N),
                    "╙": (j = {}, j[1] = function (t, e) {
                        return "M1,.5 L" + (.5 - t) + ",.5 L" + (.5 - t) + ",0 M" + (.5 + t) + ",.5 L" + (.5 + t) + ",0"
                    }, j),
                    "╚": (G = {}, G[1] = function (t, e) {
                        return "M1," + (.5 - e) + " L" + (.5 + t) + "," + (.5 - e) + " L" + (.5 + t) + ",0 M1," + (.5 + e) + " L" + (.5 - t) + "," + (.5 + e) + " L" + (.5 - t) + ",0"
                    }, G),
                    "╛": (z = {}, z[1] = function (t, e) {
                        return "M0," + (.5 + e) + " L.5," + (.5 + e) + " L.5,0 M0," + (.5 - e) + " L.5," + (.5 - e)
                    }, z),
                    "╜": (Y = {}, Y[1] = function (t, e) {
                        return "M0,.5 L" + (.5 + t) + ",.5 L" + (.5 + t) + ",0 M" + (.5 - t) + ",.5 L" + (.5 - t) + ",0"
                    }, Y),
                    "╝": (X = {}, X[1] = function (t, e) {
                        return "M0," + (.5 - e) + " L" + (.5 - t) + "," + (.5 - e) + " L" + (.5 - t) + ",0 M0," + (.5 + e) + " L" + (.5 + t) + "," + (.5 + e) + " L" + (.5 + t) + ",0"
                    }, X),
                    "╞": (q = {}, q[1] = function (t, e) {
                        return "M.5,0 L.5,1 M.5," + (.5 - e) + " L1," + (.5 - e) + " M.5," + (.5 + e) + " L1," + (.5 + e)
                    }, q),
                    "╟": (V = {}, V[1] = function (t, e) {
                        return "M" + (.5 - t) + ",0 L" + (.5 - t) + ",1 M" + (.5 + t) + ",0 L" + (.5 + t) + ",1 M" + (.5 + t) + ",.5 L1,.5"
                    }, V),
                    "╠": (J = {}, J[1] = function (t, e) {
                        return "M" + (.5 - t) + ",0 L" + (.5 - t) + ",1 M1," + (.5 + e) + " L" + (.5 + t) + "," + (.5 + e) + " L" + (.5 + t) + ",1 M1," + (.5 - e) + " L" + (.5 + t) + "," + (.5 - e) + " L" + (.5 + t) + ",0"
                    }, J),
                    "╡": (K = {}, K[1] = function (t, e) {
                        return "M.5,0 L.5,1 M0," + (.5 - e) + " L.5," + (.5 - e) + " M0," + (.5 + e) + " L.5," + (.5 + e)
                    }, K),
                    "╢": (Q = {}, Q[1] = function (t, e) {
                        return "M0,.5 L" + (.5 - t) + ",.5 M" + (.5 - t) + ",0 L" + (.5 - t) + ",1 M" + (.5 + t) + ",0 L" + (.5 + t) + ",1"
                    }, Q),
                    "╣": (Z = {}, Z[1] = function (t, e) {
                        return "M" + (.5 + t) + ",0 L" + (.5 + t) + ",1 M0," + (.5 + e) + " L" + (.5 - t) + "," + (.5 + e) + " L" + (.5 - t) + ",1 M0," + (.5 - e) + " L" + (.5 - t) + "," + (.5 - e) + " L" + (.5 - t) + ",0"
                    }, Z),
                    "╤": ($ = {}, $[1] = function (t, e) {
                        return "M0," + (.5 - e) + " L1," + (.5 - e) + " M0," + (.5 + e) + " L1," + (.5 + e) + " M.5," + (.5 + e) + " L.5,1"
                    }, $),
                    "╥": (tt = {}, tt[1] = function (t, e) {
                        return "M0,.5 L1,.5 M" + (.5 - t) + ",.5 L" + (.5 - t) + ",1 M" + (.5 + t) + ",.5 L" + (.5 + t) + ",1"
                    }, tt),
                    "╦": (et = {}, et[1] = function (t, e) {
                        return "M0," + (.5 - e) + " L1," + (.5 - e) + " M0," + (.5 + e) + " L" + (.5 - t) + "," + (.5 + e) + " L" + (.5 - t) + ",1 M1," + (.5 + e) + " L" + (.5 + t) + "," + (.5 + e) + " L" + (.5 + t) + ",1"
                    }, et),
                    "╧": (it = {}, it[1] = function (t, e) {
                        return "M.5,0 L.5," + (.5 - e) + " M0," + (.5 - e) + " L1," + (.5 - e) + " M0," + (.5 + e) + " L1," + (.5 + e)
                    }, it),
                    "╨": (rt = {}, rt[1] = function (t, e) {
                        return "M0,.5 L1,.5 M" + (.5 - t) + ",.5 L" + (.5 - t) + ",0 M" + (.5 + t) + ",.5 L" + (.5 + t) + ",0"
                    }, rt),
                    "╩": (ot = {}, ot[1] = function (t, e) {
                        return "M0," + (.5 + e) + " L1," + (.5 + e) + " M0," + (.5 - e) + " L" + (.5 - t) + "," + (.5 - e) + " L" + (.5 - t) + ",0 M1," + (.5 - e) + " L" + (.5 + t) + "," + (.5 - e) + " L" + (.5 + t) + ",0"
                    }, ot),
                    "╪": (nt = {}, nt[1] = function (t, e) {
                        return "M.5,0 L.5,1 M0," + (.5 - e) + " L1," + (.5 - e) + " M0," + (.5 + e) + " L1," + (.5 + e)
                    }, nt),
                    "╫": (st = {}, st[1] = function (t, e) {
                        return "M0,.5 L1,.5 M" + (.5 - t) + ",0 L" + (.5 - t) + ",1 M" + (.5 + t) + ",0 L" + (.5 + t) + ",1"
                    }, st),
                    "╬": (at = {}, at[1] = function (t, e) {
                        return "M0," + (.5 + e) + " L" + (.5 - t) + "," + (.5 + e) + " L" + (.5 - t) + ",1 M1," + (.5 + e) + " L" + (.5 + t) + "," + (.5 + e) + " L" + (.5 + t) + ",1 M0," + (.5 - e) + " L" + (.5 - t) + "," + (.5 - e) + " L" + (.5 - t) + ",0 M1," + (.5 - e) + " L" + (.5 + t) + "," + (.5 - e) + " L" + (.5 + t) + ",0"
                    }, at),
                    "╱": (lt = {}, lt[1] = "M1,0 L0,1", lt),
                    "╲": (ht = {}, ht[1] = "M0,0 L1,1", ht),
                    "╳": (ct = {}, ct[1] = "M1,0 L0,1 M0,0 L1,1", ct),
                    "╼": (_t = {}, _t[1] = "M.5,.5 L0,.5", _t[3] = "M.5,.5 L1,.5", _t),
                    "╽": (dt = {}, dt[1] = "M.5,.5 L.5,0", dt[3] = "M.5,.5 L.5,1", dt),
                    "╾": (ut = {}, ut[1] = "M.5,.5 L1,.5", ut[3] = "M.5,.5 L0,.5", ut),
                    "╿": (ft = {}, ft[1] = "M.5,.5 L.5,1", ft[3] = "M.5,.5 L.5,0", ft),
                    "┍": (pt = {}, pt[1] = "M.5,.5 L.5,1", pt[3] = "M.5,.5 L1,.5", pt),
                    "┎": (gt = {}, gt[1] = "M.5,.5 L1,.5", gt[3] = "M.5,.5 L.5,1", gt),
                    "┑": (vt = {}, vt[1] = "M.5,.5 L.5,1", vt[3] = "M.5,.5 L0,.5", vt),
                    "┒": (Ct = {}, Ct[1] = "M.5,.5 L0,.5", Ct[3] = "M.5,.5 L.5,1", Ct),
                    "┕": (yt = {}, yt[1] = "M.5,.5 L.5,0", yt[3] = "M.5,.5 L1,.5", yt),
                    "┖": (mt = {}, mt[1] = "M.5,.5 L1,.5", mt[3] = "M.5,.5 L.5,0", mt),
                    "┙": (Lt = {}, Lt[1] = "M.5,.5 L.5,0", Lt[3] = "M.5,.5 L0,.5", Lt),
                    "┚": (wt = {}, wt[1] = "M.5,.5 L0,.5", wt[3] = "M.5,.5 L.5,0", wt),
                    "┝": (bt = {}, bt[1] = "M.5,0 L.5,1", bt[3] = "M.5,.5 L1,.5", bt),
                    "┞": (Rt = {}, Rt[1] = "M0.5,1 L.5,.5 L1,.5", Rt[3] = "M.5,.5 L.5,0", Rt),
                    "┟": (Mt = {}, Mt[1] = "M.5,0 L.5,.5 L1,.5", Mt[3] = "M.5,.5 L.5,1", Mt),
                    "┠": (xt = {}, xt[1] = "M.5,.5 L1,.5", xt[3] = "M.5,0 L.5,1", xt),
                    "┡": (At = {}, At[1] = "M.5,.5 L.5,1", At[3] = "M.5,0 L.5,.5 L1,.5", At),
                    "┢": (Et = {}, Et[1] = "M.5,.5 L.5,0", Et[3] = "M0.5,1 L.5,.5 L1,.5", Et),
                    "┥": (Dt = {}, Dt[1] = "M.5,0 L.5,1", Dt[3] = "M.5,.5 L0,.5", Dt),
                    "┦": (Tt = {}, Tt[1] = "M0,.5 L.5,.5 L.5,1", Tt[3] = "M.5,.5 L.5,0", Tt),
                    "┧": (St = {}, St[1] = "M.5,0 L.5,.5 L0,.5", St[3] = "M.5,.5 L.5,1", St),
                    "┨": (Ft = {}, Ft[1] = "M.5,.5 L0,.5", Ft[3] = "M.5,0 L.5,1", Ft),
                    "┩": (Ot = {}, Ot[1] = "M.5,.5 L.5,1", Ot[3] = "M.5,0 L.5,.5 L0,.5", Ot),
                    "┪": (Bt = {}, Bt[1] = "M.5,.5 L.5,0", Bt[3] = "M0,.5 L.5,.5 L.5,1", Bt),
                    "┭": (It = {}, It[1] = "M0.5,1 L.5,.5 L1,.5", It[3] = "M.5,.5 L0,.5", It),
                    "┮": (Pt = {}, Pt[1] = "M0,.5 L.5,.5 L.5,1", Pt[3] = "M.5,.5 L1,.5", Pt),
                    "┯": (Ht = {}, Ht[1] = "M.5,.5 L.5,1", Ht[3] = "M0,.5 L1,.5", Ht),
                    "┰": (kt = {}, kt[1] = "M0,.5 L1,.5", kt[3] = "M.5,.5 L.5,1", kt),
                    "┱": (Wt = {}, Wt[1] = "M.5,.5 L1,.5", Wt[3] = "M0,.5 L.5,.5 L.5,1", Wt),
                    "┲": (Ut = {}, Ut[1] = "M.5,.5 L0,.5", Ut[3] = "M0.5,1 L.5,.5 L1,.5", Ut),
                    "┵": (Nt = {}, Nt[1] = "M.5,0 L.5,.5 L1,.5", Nt[3] = "M.5,.5 L0,.5", Nt),
                    "┶": (jt = {}, jt[1] = "M.5,0 L.5,.5 L0,.5", jt[3] = "M.5,.5 L1,.5", jt),
                    "┷": (Gt = {}, Gt[1] = "M.5,.5 L.5,0", Gt[3] = "M0,.5 L1,.5", Gt),
                    "┸": (zt = {}, zt[1] = "M0,.5 L1,.5", zt[3] = "M.5,.5 L.5,0", zt),
                    "┹": (Yt = {}, Yt[1] = "M.5,.5 L1,.5", Yt[3] = "M.5,0 L.5,.5 L0,.5", Yt),
                    "┺": (Xt = {}, Xt[1] = "M.5,.5 L0,.5", Xt[3] = "M.5,0 L.5,.5 L1,.5", Xt),
                    "┽": (qt = {}, qt[1] = "M.5,0 L.5,1 M.5,.5 L1,.5", qt[3] = "M.5,.5 L0,.5", qt),
                    "┾": (Vt = {}, Vt[1] = "M.5,0 L.5,1 M.5,.5 L0,.5", Vt[3] = "M.5,.5 L1,.5", Vt),
                    "┿": (Jt = {}, Jt[1] = "M.5,0 L.5,1", Jt[3] = "M0,.5 L1,.5", Jt),
                    "╀": (Kt = {}, Kt[1] = "M0,.5 L1,.5 M.5,.5 L.5,1", Kt[3] = "M.5,.5 L.5,0", Kt),
                    "╁": (Qt = {}, Qt[1] = "M.5,.5 L.5,0 M0,.5 L1,.5", Qt[3] = "M.5,.5 L.5,1", Qt),
                    "╂": (Zt = {}, Zt[1] = "M0,.5 L1,.5", Zt[3] = "M.5,0 L.5,1", Zt),
                    "╃": ($t = {}, $t[1] = "M0.5,1 L.5,.5 L1,.5", $t[3] = "M.5,0 L.5,.5 L0,.5", $t),
                    "╄": (te = {}, te[1] = "M0,.5 L.5,.5 L.5,1", te[3] = "M.5,0 L.5,.5 L1,.5", te),
                    "╅": (ee = {}, ee[1] = "M.5,0 L.5,.5 L1,.5", ee[3] = "M0,.5 L.5,.5 L.5,1", ee),
                    "╆": (ie = {}, ie[1] = "M.5,0 L.5,.5 L0,.5", ie[3] = "M0.5,1 L.5,.5 L1,.5", ie),
                    "╇": (re = {}, re[1] = "M.5,.5 L.5,1", re[3] = "M.5,.5 L.5,0 M0,.5 L1,.5", re),
                    "╈": (oe = {}, oe[1] = "M.5,.5 L.5,0", oe[3] = "M0,.5 L1,.5 M.5,.5 L.5,1", oe),
                    "╉": (ne = {}, ne[1] = "M.5,.5 L1,.5", ne[3] = "M.5,0 L.5,1 M.5,.5 L0,.5", ne),
                    "╊": (se = {}, se[1] = "M.5,.5 L0,.5", se[3] = "M.5,0 L.5,1 M.5,.5 L1,.5", se),
                    "╌": (ae = {}, ae[1] = "M.1,.5 L.4,.5 M.6,.5 L.9,.5", ae),
                    "╍": (le = {}, le[3] = "M.1,.5 L.4,.5 M.6,.5 L.9,.5", le),
                    "┄": (he = {}, he[1] = "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5", he),
                    "┅": (ce = {}, ce[3] = "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5", ce),
                    "┈": (_e = {}, _e[1] = "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5", _e),
                    "┉": (de = {}, de[3] = "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5", de),
                    "╎": (ue = {}, ue[1] = "M.5,.1 L.5,.4 M.5,.6 L.5,.9", ue),
                    "╏": (fe = {}, fe[3] = "M.5,.1 L.5,.4 M.5,.6 L.5,.9", fe),
                    "┆": (pe = {}, pe[1] = "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333", pe),
                    "┇": (ge = {}, ge[3] = "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333", ge),
                    "┊": (ve = {}, ve[1] = "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95", ve),
                    "┋": (Ce = {}, Ce[3] = "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95", Ce),
                    "╭": (ye = {}, ye[1] = "C.5,1,.5,.5,1,.5", ye),
                    "╮": (me = {}, me[1] = "C.5,1,.5,.5,0,.5", me),
                    "╯": (Le = {}, Le[1] = "C.5,0,.5,.5,0,.5", Le),
                    "╰": (we = {}, we[1] = "C.5,0,.5,.5,1,.5", we)
                }, e.tryDrawCustomChar = function (t, i, r, o, n, s) {
                    var a = e.blockElementDefinitions[i];
                    if (a) return function (t, e, i, r, o, n) {
                        for (var s = 0; s < e.length; s++) {
                            var a = e[s], l = o / 8, h = n / 8;
                            t.fillRect(i + a.x * l, r + a.y * h, a.w * l, a.h * h)
                        }
                    }(t, a, r, o, n, s), !0;
                    var l = Re[i];
                    if (l) return function (t, e, i, r, o, n) {
                        var s, a = Me.get(e);
                        a || (a = new Map, Me.set(e, a));
                        var l = t.fillStyle;
                        if ("string" != typeof l) throw new Error('Unexpected fillStyle type "' + l + '"');
                        var h = a.get(l);
                        if (!h) {
                            var c = e[0].length, _ = e.length, d = document.createElement("canvas");
                            d.width = c, d.height = _;
                            var u = (0, be.throwIfFalsy)(d.getContext("2d")), f = new ImageData(c, _), p = void 0,
                                g = void 0, v = void 0, C = void 0;
                            if (l.startsWith("#")) p = parseInt(l.substr(1, 2), 16), g = parseInt(l.substr(3, 2), 16), v = parseInt(l.substr(5, 2), 16), C = l.length > 7 && parseInt(l.substr(7, 2), 16) || 1; else {
                                if (!l.startsWith("rgba")) throw new Error('Unexpected fillStyle color format "' + l + '" when drawing pattern glyph');
                                p = (s = l.substring(5, l.length - 1).split(",").map((function (t) {
                                    return parseFloat(t)
                                })))[0], g = s[1], v = s[2], C = s[3]
                            }
                            for (var y = 0; y < _; y++) for (var m = 0; m < c; m++) f.data[4 * (y * c + m)] = p, f.data[4 * (y * c + m) + 1] = g, f.data[4 * (y * c + m) + 2] = v, f.data[4 * (y * c + m) + 3] = e[y][m] * (255 * C);
                            u.putImageData(f, 0, 0), h = (0, be.throwIfFalsy)(t.createPattern(d, null)), a.set(l, h)
                        }
                        t.fillStyle = h, t.fillRect(i, r, o, n)
                    }(t, l, r, o, n, s), !0;
                    var h = e.boxDrawingDefinitions[i];
                    return !!h && (function (t, e, i, r, o, n) {
                        t.strokeStyle = t.fillStyle;
                        for (var s = 0, a = Object.entries(e); s < a.length; s++) {
                            var l = a[s], h = l[0], c = l[1];
                            t.beginPath(), t.lineWidth = window.devicePixelRatio * Number.parseInt(h);
                            for (var _ = 0, d = ("function" == typeof c ? c(.15, .15 / n * o) : c).split(" "); _ < d.length; _++) {
                                var u = d[_], f = u[0], p = Ae[f];
                                if (p) {
                                    var g = u.substring(1).split(",");
                                    g[0] && g[1] && p(t, Ee(g, o, n, i, r))
                                } else console.error('Could not find drawing instructions for "' + f + '"')
                            }
                            t.stroke(), t.closePath()
                        }
                    }(t, h, r, o, n, s), !0)
                };
                var Me = new Map;

                function xe(t, e, i) {
                    return void 0 === i && (i = 0), Math.max(Math.min(t, e), i)
                }

                var Ae = {
                    C: function (t, e) {
                        return t.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5])
                    }, L: function (t, e) {
                        return t.lineTo(e[0], e[1])
                    }, M: function (t, e) {
                        return t.moveTo(e[0], e[1])
                    }
                };

                function Ee(t, e, i, r, o) {
                    var n = t.map((function (t) {
                        return parseFloat(t) || parseInt(t)
                    }));
                    if (n.length < 2) throw new Error("Too few arguments for instruction");
                    for (var s = 0; s < n.length; s += 2) n[s] *= e, 0 !== n[s] && (n[s] = xe(Math.round(n[s] + .5) - .5, e, 0)), n[s] += r;
                    for (var a = 1; a < n.length; a += 2) n[a] *= i, 0 !== n[a] && (n[a] = xe(Math.round(n[a] + .5) - .5, i, 0)), n[a] += o;
                    return n
                }
            }, 634: (t, e) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.throwIfFalsy = void 0, e.throwIfFalsy = function (t) {
                    if (!t) throw new Error("value must not be falsy");
                    return t
                }
            }, 499: (t, e, i) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.CHAR_ATLAS_CELL_SPACING = e.TEXT_BASELINE = e.DIM_OPACITY = e.INVERTED_DEFAULT_COLOR = void 0;
                var r = i(399);
                e.INVERTED_DEFAULT_COLOR = 257, e.DIM_OPACITY = .5, e.TEXT_BASELINE = r.isFirefox ? "bottom" : "ideographic", e.CHAR_ATLAS_CELL_SPACING = 1
            }, 345: (t, e) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.forwardEvent = e.EventEmitter = void 0;
                var i = function () {
                    function t() {
                        this._listeners = [], this._disposed = !1
                    }

                    return Object.defineProperty(t.prototype, "event", {
                        get: function () {
                            var t = this;
                            return this._event || (this._event = function (e) {
                                return t._listeners.push(e), {
                                    dispose: function () {
                                        if (!t._disposed) for (var i = 0; i < t._listeners.length; i++) if (t._listeners[i] === e) return void t._listeners.splice(i, 1)
                                    }
                                }
                            }), this._event
                        }, enumerable: !1, configurable: !0
                    }), t.prototype.fire = function (t, e) {
                        for (var i = [], r = 0; r < this._listeners.length; r++) i.push(this._listeners[r]);
                        for (r = 0; r < i.length; r++) i[r].call(void 0, t, e)
                    }, t.prototype.dispose = function () {
                        this._listeners && (this._listeners.length = 0), this._disposed = !0
                    }, t
                }();
                e.EventEmitter = i, e.forwardEvent = function (t, e) {
                    return t((function (t) {
                        return e.fire(t)
                    }))
                }
            }, 859: (t, e) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.getDisposeArrayDisposable = e.disposeArray = e.Disposable = void 0;
                var i = function () {
                    function t() {
                        this._disposables = [], this._isDisposed = !1
                    }

                    return t.prototype.dispose = function () {
                        this._isDisposed = !0;
                        for (var t = 0, e = this._disposables; t < e.length; t++) e[t].dispose();
                        this._disposables.length = 0
                    }, t.prototype.register = function (t) {
                        return this._disposables.push(t), t
                    }, t.prototype.unregister = function (t) {
                        var e = this._disposables.indexOf(t);
                        -1 !== e && this._disposables.splice(e, 1)
                    }, t
                }();

                function r(t) {
                    for (var e = 0, i = t; e < i.length; e++) i[e].dispose();
                    t.length = 0
                }

                e.Disposable = i, e.disposeArray = r, e.getDisposeArrayDisposable = function (t) {
                    return {
                        dispose: function () {
                            return r(t)
                        }
                    }
                }
            }, 399: (t, e) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.isLinux = e.isWindows = e.isIphone = e.isIpad = e.isMac = e.isSafari = e.isFirefox = void 0;
                var i = "undefined" == typeof navigator, r = i ? "node" : navigator.userAgent,
                    o = i ? "node" : navigator.platform;
                e.isFirefox = r.includes("Firefox"), e.isSafari = /^((?!chrome|android).)*safari/i.test(r), e.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(o), e.isIpad = "iPad" === o, e.isIphone = "iPhone" === o, e.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(o), e.isLinux = o.indexOf("Linux") >= 0
            }, 455: (t, e) => {
                function i(t, e, i, r) {
                    if (void 0 === i && (i = 0), void 0 === r && (r = t.length), i >= t.length) return t;
                    i = (t.length + i) % t.length, r = r >= t.length ? t.length : (t.length + r) % t.length;
                    for (var o = i; o < r; ++o) t[o] = e;
                    return t
                }

                Object.defineProperty(e, "__esModule", {value: !0}), e.concat = e.fillFallback = e.fill = void 0, e.fill = function (t, e, r, o) {
                    return t.fill ? t.fill(e, r, o) : i(t, e, r, o)
                }, e.fillFallback = i, e.concat = function (t, e) {
                    var i = new t.constructor(t.length + e.length);
                    return i.set(t), i.set(e, t.length), i
                }
            }, 147: (t, e) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.ExtendedAttrs = e.AttributeData = void 0;
                var i = function () {
                    function t() {
                        this.fg = 0, this.bg = 0, this.extended = new r
                    }

                    return t.toColorRGB = function (t) {
                        return [t >>> 16 & 255, t >>> 8 & 255, 255 & t]
                    }, t.fromColorRGB = function (t) {
                        return (255 & t[0]) << 16 | (255 & t[1]) << 8 | 255 & t[2]
                    }, t.prototype.clone = function () {
                        var e = new t;
                        return e.fg = this.fg, e.bg = this.bg, e.extended = this.extended.clone(), e
                    }, t.prototype.isInverse = function () {
                        return 67108864 & this.fg
                    }, t.prototype.isBold = function () {
                        return 134217728 & this.fg
                    }, t.prototype.isUnderline = function () {
                        return 268435456 & this.fg
                    }, t.prototype.isBlink = function () {
                        return 536870912 & this.fg
                    }, t.prototype.isInvisible = function () {
                        return 1073741824 & this.fg
                    }, t.prototype.isItalic = function () {
                        return 67108864 & this.bg
                    }, t.prototype.isDim = function () {
                        return 134217728 & this.bg
                    }, t.prototype.isStrikethrough = function () {
                        return 2147483648 & this.fg
                    }, t.prototype.getFgColorMode = function () {
                        return 50331648 & this.fg
                    }, t.prototype.getBgColorMode = function () {
                        return 50331648 & this.bg
                    }, t.prototype.isFgRGB = function () {
                        return 50331648 == (50331648 & this.fg)
                    }, t.prototype.isBgRGB = function () {
                        return 50331648 == (50331648 & this.bg)
                    }, t.prototype.isFgPalette = function () {
                        return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg)
                    }, t.prototype.isBgPalette = function () {
                        return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg)
                    }, t.prototype.isFgDefault = function () {
                        return 0 == (50331648 & this.fg)
                    }, t.prototype.isBgDefault = function () {
                        return 0 == (50331648 & this.bg)
                    }, t.prototype.isAttributeDefault = function () {
                        return 0 === this.fg && 0 === this.bg
                    }, t.prototype.getFgColor = function () {
                        switch (50331648 & this.fg) {
                            case 16777216:
                            case 33554432:
                                return 255 & this.fg;
                            case 50331648:
                                return 16777215 & this.fg;
                            default:
                                return -1
                        }
                    }, t.prototype.getBgColor = function () {
                        switch (50331648 & this.bg) {
                            case 16777216:
                            case 33554432:
                                return 255 & this.bg;
                            case 50331648:
                                return 16777215 & this.bg;
                            default:
                                return -1
                        }
                    }, t.prototype.hasExtendedAttrs = function () {
                        return 268435456 & this.bg
                    }, t.prototype.updateExtended = function () {
                        this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456
                    }, t.prototype.getUnderlineColor = function () {
                        if (268435456 & this.bg && ~this.extended.underlineColor) switch (50331648 & this.extended.underlineColor) {
                            case 16777216:
                            case 33554432:
                                return 255 & this.extended.underlineColor;
                            case 50331648:
                                return 16777215 & this.extended.underlineColor;
                            default:
                                return this.getFgColor()
                        }
                        return this.getFgColor()
                    }, t.prototype.getUnderlineColorMode = function () {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode()
                    }, t.prototype.isUnderlineColorRGB = function () {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 == (50331648 & this.extended.underlineColor) : this.isFgRGB()
                    }, t.prototype.isUnderlineColorPalette = function () {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 16777216 == (50331648 & this.extended.underlineColor) || 33554432 == (50331648 & this.extended.underlineColor) : this.isFgPalette()
                    }, t.prototype.isUnderlineColorDefault = function () {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 0 == (50331648 & this.extended.underlineColor) : this.isFgDefault()
                    }, t.prototype.getUnderlineStyle = function () {
                        return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0
                    }, t
                }();
                e.AttributeData = i;
                var r = function () {
                    function t(t, e) {
                        void 0 === t && (t = 0), void 0 === e && (e = -1), this.underlineStyle = t, this.underlineColor = e
                    }

                    return t.prototype.clone = function () {
                        return new t(this.underlineStyle, this.underlineColor)
                    }, t.prototype.isEmpty = function () {
                        return 0 === this.underlineStyle
                    }, t
                }();
                e.ExtendedAttrs = r
            }, 782: function (t, e, i) {
                var r, o = this && this.__extends || (r = function (t, e) {
                    return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    }, r(t, e)
                }, function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function i() {
                        this.constructor = t
                    }

                    r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                });
                Object.defineProperty(e, "__esModule", {value: !0}), e.CellData = void 0;
                var n = i(133), s = i(855), a = i(147), l = function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.content = 0, e.fg = 0, e.bg = 0, e.extended = new a.ExtendedAttrs, e.combinedData = "", e
                    }

                    return o(e, t), e.fromCharData = function (t) {
                        var i = new e;
                        return i.setFromCharData(t), i
                    }, e.prototype.isCombined = function () {
                        return 2097152 & this.content
                    }, e.prototype.getWidth = function () {
                        return this.content >> 22
                    }, e.prototype.getChars = function () {
                        return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, n.stringFromCodePoint)(2097151 & this.content) : ""
                    }, e.prototype.getCode = function () {
                        return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content
                    }, e.prototype.setFromCharData = function (t) {
                        this.fg = t[s.CHAR_DATA_ATTR_INDEX], this.bg = 0;
                        var e = !1;
                        if (t[s.CHAR_DATA_CHAR_INDEX].length > 2) e = !0; else if (2 === t[s.CHAR_DATA_CHAR_INDEX].length) {
                            var i = t[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                            if (55296 <= i && i <= 56319) {
                                var r = t[s.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                                56320 <= r && r <= 57343 ? this.content = 1024 * (i - 55296) + r - 56320 + 65536 | t[s.CHAR_DATA_WIDTH_INDEX] << 22 : e = !0
                            } else e = !0
                        } else this.content = t[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t[s.CHAR_DATA_WIDTH_INDEX] << 22;
                        e && (this.combinedData = t[s.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | t[s.CHAR_DATA_WIDTH_INDEX] << 22)
                    }, e.prototype.getAsCharData = function () {
                        return [this.fg, this.getChars(), this.getWidth(), this.getCode()]
                    }, e
                }(a.AttributeData);
                e.CellData = l
            }, 855: (t, e) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.WHITESPACE_CELL_CODE = e.WHITESPACE_CELL_WIDTH = e.WHITESPACE_CELL_CHAR = e.NULL_CELL_CODE = e.NULL_CELL_WIDTH = e.NULL_CELL_CHAR = e.CHAR_DATA_CODE_INDEX = e.CHAR_DATA_WIDTH_INDEX = e.CHAR_DATA_CHAR_INDEX = e.CHAR_DATA_ATTR_INDEX = e.DEFAULT_ATTR = e.DEFAULT_COLOR = void 0, e.DEFAULT_COLOR = 256, e.DEFAULT_ATTR = 256 | e.DEFAULT_COLOR << 9, e.CHAR_DATA_ATTR_INDEX = 0, e.CHAR_DATA_CHAR_INDEX = 1, e.CHAR_DATA_WIDTH_INDEX = 2, e.CHAR_DATA_CODE_INDEX = 3, e.NULL_CELL_CHAR = "", e.NULL_CELL_WIDTH = 1, e.NULL_CELL_CODE = 0, e.WHITESPACE_CELL_CHAR = " ", e.WHITESPACE_CELL_WIDTH = 1, e.WHITESPACE_CELL_CODE = 32
            }, 133: (t, e) => {
                Object.defineProperty(e, "__esModule", {value: !0}), e.Utf8ToUtf32 = e.StringToUtf32 = e.utf32ToString = e.stringFromCodePoint = void 0, e.stringFromCodePoint = function (t) {
                    return t > 65535 ? (t -= 65536, String.fromCharCode(55296 + (t >> 10)) + String.fromCharCode(t % 1024 + 56320)) : String.fromCharCode(t)
                }, e.utf32ToString = function (t, e, i) {
                    void 0 === e && (e = 0), void 0 === i && (i = t.length);
                    for (var r = "", o = e; o < i; ++o) {
                        var n = t[o];
                        n > 65535 ? (n -= 65536, r += String.fromCharCode(55296 + (n >> 10)) + String.fromCharCode(n % 1024 + 56320)) : r += String.fromCharCode(n)
                    }
                    return r
                };
                var i = function () {
                    function t() {
                        this._interim = 0
                    }

                    return t.prototype.clear = function () {
                        this._interim = 0
                    }, t.prototype.decode = function (t, e) {
                        var i = t.length;
                        if (!i) return 0;
                        var r = 0, o = 0;
                        this._interim && (56320 <= (a = t.charCodeAt(o++)) && a <= 57343 ? e[r++] = 1024 * (this._interim - 55296) + a - 56320 + 65536 : (e[r++] = this._interim, e[r++] = a), this._interim = 0);
                        for (var n = o; n < i; ++n) {
                            var s = t.charCodeAt(n);
                            if (55296 <= s && s <= 56319) {
                                if (++n >= i) return this._interim = s, r;
                                var a;
                                56320 <= (a = t.charCodeAt(n)) && a <= 57343 ? e[r++] = 1024 * (s - 55296) + a - 56320 + 65536 : (e[r++] = s, e[r++] = a)
                            } else 65279 !== s && (e[r++] = s)
                        }
                        return r
                    }, t
                }();
                e.StringToUtf32 = i;
                var r = function () {
                    function t() {
                        this.interim = new Uint8Array(3)
                    }

                    return t.prototype.clear = function () {
                        this.interim.fill(0)
                    }, t.prototype.decode = function (t, e) {
                        var i = t.length;
                        if (!i) return 0;
                        var r, o, n, s, a = 0, l = 0, h = 0;
                        if (this.interim[0]) {
                            var c = !1, _ = this.interim[0];
                            _ &= 192 == (224 & _) ? 31 : 224 == (240 & _) ? 15 : 7;
                            for (var d = 0, u = void 0; (u = 63 & this.interim[++d]) && d < 4;) _ <<= 6, _ |= u;
                            for (var f = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, p = f - d; h < p;) {
                                if (h >= i) return 0;
                                if (128 != (192 & (u = t[h++]))) {
                                    h--, c = !0;
                                    break
                                }
                                this.interim[d++] = u, _ <<= 6, _ |= 63 & u
                            }
                            c || (2 === f ? _ < 128 ? h-- : e[a++] = _ : 3 === f ? _ < 2048 || _ >= 55296 && _ <= 57343 || 65279 === _ || (e[a++] = _) : _ < 65536 || _ > 1114111 || (e[a++] = _)), this.interim.fill(0)
                        }
                        for (var g = i - 4, v = h; v < i;) {
                            for (; !(!(v < g) || 128 & (r = t[v]) || 128 & (o = t[v + 1]) || 128 & (n = t[v + 2]) || 128 & (s = t[v + 3]));) e[a++] = r, e[a++] = o, e[a++] = n, e[a++] = s, v += 4;
                            if ((r = t[v++]) < 128) e[a++] = r; else if (192 == (224 & r)) {
                                if (v >= i) return this.interim[0] = r, a;
                                if (128 != (192 & (o = t[v++]))) {
                                    v--;
                                    continue
                                }
                                if ((l = (31 & r) << 6 | 63 & o) < 128) {
                                    v--;
                                    continue
                                }
                                e[a++] = l
                            } else if (224 == (240 & r)) {
                                if (v >= i) return this.interim[0] = r, a;
                                if (128 != (192 & (o = t[v++]))) {
                                    v--;
                                    continue
                                }
                                if (v >= i) return this.interim[0] = r, this.interim[1] = o, a;
                                if (128 != (192 & (n = t[v++]))) {
                                    v--;
                                    continue
                                }
                                if ((l = (15 & r) << 12 | (63 & o) << 6 | 63 & n) < 2048 || l >= 55296 && l <= 57343 || 65279 === l) continue;
                                e[a++] = l
                            } else if (240 == (248 & r)) {
                                if (v >= i) return this.interim[0] = r, a;
                                if (128 != (192 & (o = t[v++]))) {
                                    v--;
                                    continue
                                }
                                if (v >= i) return this.interim[0] = r, this.interim[1] = o, a;
                                if (128 != (192 & (n = t[v++]))) {
                                    v--;
                                    continue
                                }
                                if (v >= i) return this.interim[0] = r, this.interim[1] = o, this.interim[2] = n, a;
                                if (128 != (192 & (s = t[v++]))) {
                                    v--;
                                    continue
                                }
                                if ((l = (7 & r) << 18 | (63 & o) << 12 | (63 & n) << 6 | 63 & s) < 65536 || l > 1114111) continue;
                                e[a++] = l
                            }
                        }
                        return a
                    }, t
                }();
                e.Utf8ToUtf32 = r
            }
        }, e = {};

        function i(r) {
            var o = e[r];
            if (void 0 !== o) return o.exports;
            var n = e[r] = {exports: {}};
            return t[r].call(n.exports, n, n.exports, i), n.exports
        }

        var r = {};
        return (() => {
            var t = r;
            Object.defineProperty(t, "__esModule", {value: !0}), t.WebglAddon = void 0;
            var e = i(666), o = i(345), n = i(399), s = function () {
                function t(t) {
                    this._preserveDrawingBuffer = t, this._onContextLoss = new o.EventEmitter
                }

                return Object.defineProperty(t.prototype, "onContextLoss", {
                    get: function () {
                        return this._onContextLoss.event
                    }, enumerable: !1, configurable: !0
                }), t.prototype.activate = function (t) {
                    var i = this;
                    if (!t.element) throw new Error("Cannot activate WebglAddon before Terminal.open");
                    if (n.isSafari) throw new Error("Webgl is not currently supported on Safari");
                    this._terminal = t;
                    var r = t._core._renderService, o = t._core._characterJoinerService,
                        s = t._core._colorManager.colors;
                    this._renderer = new e.WebglRenderer(t, s, o, this._preserveDrawingBuffer), this._renderer.onContextLoss((function () {
                        return i._onContextLoss.fire()
                    })), r.setRenderer(this._renderer)
                }, t.prototype.dispose = function () {
                    if (!this._terminal) throw new Error("Cannot dispose WebglAddon because it is activated");
                    var t = this._terminal._core._renderService;
                    t.setRenderer(this._terminal._core._createRenderer()), t.onResize(this._terminal.cols, this._terminal.rows), this._renderer = void 0
                }, Object.defineProperty(t.prototype, "textureAtlas", {
                    get: function () {
                        var t;
                        return null === (t = this._renderer) || void 0 === t ? void 0 : t.textureAtlas
                    }, enumerable: !1, configurable: !0
                }), t.prototype.clearTextureAtlas = function () {
                    var t;
                    null === (t = this._renderer) || void 0 === t || t.clearCharAtlas()
                }, t
            }();
            t.WebglAddon = s
        })(), r
    })()
}));
//# sourceMappingURL=xterm-addon-webgl.js.map