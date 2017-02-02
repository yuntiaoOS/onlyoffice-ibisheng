(function (window, undefined) {
    var drawingsChangesMap = {};
    var drawingConstructorsMap = {};
    var drawingContentChanges = {};
    window['AscDFH'].drawingsChangesMap = drawingsChangesMap;
    window['AscDFH'].drawingsConstructorsMap = drawingConstructorsMap;
    window['AscDFH'].drawingContentChanges = drawingContentChanges;

    function private_SetValue(Value) {
        if (!this.Class) {
            return;
        }
        if (AscDFH.drawingsChangesMap[this.Type]) {
            var _Value = Value === undefined ? null : Value;
            AscDFH.drawingsChangesMap[this.Type](this.Class, _Value, this.FromLoad);
        }
    }

    function CChangesDrawingsBool(Class, Type, OldPr, NewPr) {
        this.Type = Type;
        var _OldPr = AscFormat.isRealBool(OldPr) ? OldPr : undefined;
        var _NewPr = AscFormat.isRealBool(NewPr) ? NewPr : undefined;
        CChangesDrawingsBool.superclass.constructor.call(this, Class, _OldPr, _NewPr);
    }
    AscCommon.extendClass(CChangesDrawingsBool, AscDFH.CChangesBaseBoolProperty);
    CChangesDrawingsBool.prototype.private_SetValue = private_SetValue;
    CChangesDrawingsBool.prototype.ReadFromBinary = function (reader) {
        reader.Seek2(reader.GetCurPos() - 4);
        this.Type = reader.GetLong();
        CChangesDrawingsBool.superclass.ReadFromBinary.call(this, reader);
    };
    window['AscDFH'].CChangesDrawingsBool = CChangesDrawingsBool;


    function CChangesDrawingsLong(Class, Type, OldPr, NewPr) {
        this.Type = Type;
        var _OldPr = AscFormat.isRealNumber(OldPr) ? ((OldPr + 0.5) >> 0) : undefined;
        var _NewPr = AscFormat.isRealNumber(NewPr) ? ((NewPr + 0.5) >> 0) : undefined;
        CChangesDrawingsLong.superclass.constructor.call(this, Class, _OldPr, _NewPr);
    }

    AscCommon.extendClass(CChangesDrawingsLong, AscDFH.CChangesBaseLongProperty);

    CChangesDrawingsLong.prototype.private_SetValue = private_SetValue;
    CChangesDrawingsLong.prototype.ReadFromBinary = function (reader) {
        reader.Seek2(reader.GetCurPos() - 4);
        this.Type = reader.GetLong();
        CChangesDrawingsLong.superclass.ReadFromBinary.call(this, reader);
    };
    window['AscDFH'].CChangesDrawingsLong = CChangesDrawingsLong;

    function CChangesDrawingsDouble(Class, Type, OldPr, NewPr) {
        this.Type = Type;
        var _OldPr = AscFormat.isRealNumber(OldPr) ? OldPr : undefined;
        var _NewPr = AscFormat.isRealNumber(NewPr) ? NewPr : undefined;
        CChangesDrawingsDouble.superclass.constructor.call(this, Class, _OldPr, _NewPr);
    }

    AscCommon.extendClass(CChangesDrawingsDouble, AscDFH.CChangesBaseDoubleProperty);

    CChangesDrawingsDouble.prototype.private_SetValue = private_SetValue;
    CChangesDrawingsDouble.prototype.ReadFromBinary = function (reader) {

        reader.Seek2(reader.GetCurPos() - 4);
        this.Type = reader.GetLong();
        CChangesDrawingsDouble.superclass.ReadFromBinary.call(this, reader);
    };
    window['AscDFH'].CChangesDrawingsDouble = CChangesDrawingsDouble;


    function CChangesDrawingsString(Class, Type, OldPr, NewPr) {
        this.Type = Type;
        var _OldPr = typeof OldPr === "string" ? OldPr : undefined;
        var _NewPr = typeof NewPr === "string" ? NewPr : undefined;
        CChangesDrawingsString.superclass.constructor.call(this, Class, _OldPr, _NewPr);
    }

    AscCommon.extendClass(CChangesDrawingsString, AscDFH.CChangesBaseStringProperty);

    CChangesDrawingsString.prototype.private_SetValue = private_SetValue;
    CChangesDrawingsString.prototype.ReadFromBinary = function (reader) {
        reader.Seek2(reader.GetCurPos() - 4);
        this.Type = reader.GetLong();
        CChangesDrawingsString.superclass.ReadFromBinary.call(this, reader);
    };
    window['AscDFH'].CChangesDrawingsString = CChangesDrawingsString;


    function CChangesDrawingsObjectNoId(Class, Type, OldPr, NewPr) {
        this.Type = Type;
        this.FromLoad = false;
        var _OldPr = AscCommon.isRealObject(OldPr) ? OldPr : undefined;
        var _NewPr = AscCommon.isRealObject(NewPr) ? NewPr : undefined;
        CChangesDrawingsObjectNoId.superclass.constructor.call(this, Class, _OldPr, _NewPr);
    }

    AscCommon.extendClass(CChangesDrawingsObjectNoId, AscDFH.CChangesBaseObjectProperty);
    CChangesDrawingsObjectNoId.prototype.private_SetValue = private_SetValue;
    window['AscDFH'].CChangesDrawingsObjectNoId = CChangesDrawingsObjectNoId;
    CChangesDrawingsObjectNoId.prototype.ReadFromBinary = function (reader) {
        reader.Seek2(reader.GetCurPos() - 4);
        this.Type = reader.GetLong();
        this.FromLoad = true;
        CChangesDrawingsObjectNoId.superclass.ReadFromBinary.call(this, reader);
    };
    CChangesDrawingsObjectNoId.prototype.private_SetValue = private_SetValue;
    CChangesDrawingsObjectNoId.prototype.private_CreateObject = function () {
        if (AscDFH.drawingsConstructorsMap[this.Type]) {
            return new AscDFH.drawingsConstructorsMap[this.Type]();
        }
        return null;
    };


    function CChangesDrawingsObject(Class, Type, OldPr, NewPr) {
        this.Type = Type;
        var _OldPr = OldPr && OldPr.Get_Id ? OldPr.Get_Id() : undefined;
        var _NewPr = NewPr && NewPr.Get_Id ? NewPr.Get_Id() : undefined;
        CChangesDrawingsObject.superclass.constructor.call(this, Class, _OldPr, _NewPr);
    }

    AscCommon.extendClass(CChangesDrawingsObject, AscDFH.CChangesBaseStringProperty);
    window['AscDFH'].CChangesDrawingsObject = CChangesDrawingsObject;
    CChangesDrawingsObject.prototype.ReadFromBinary = function (reader) {
        reader.Seek2(reader.GetCurPos() - 4);
        this.Type = reader.GetLong();
        CChangesDrawingsObject.superclass.ReadFromBinary.call(this, reader);
    };
    CChangesDrawingsObject.prototype.private_SetValue = function (Value) {
        var oObject = null;
        if (typeof Value === "string") {
            oObject = AscCommon.g_oTableId.Get_ById(Value);
            if (!oObject) {
                oObject = null;
            }
        }
        if (AscDFH.drawingsChangesMap[this.Type]) {
            AscDFH.drawingsChangesMap[this.Type](this.Class, oObject);
        }
    };

    function CChangesDrawingsContent(Class, Type, Pos, Items, isAdd) {
        this.Type = Type;
        CChangesDrawingsContent.superclass.constructor.call(this, Class, Pos, Items, isAdd);
    }

    AscCommon.extendClass(CChangesDrawingsContent, AscDFH.CChangesBaseContentChange);
    window['AscDFH'].CChangesDrawingsContent = CChangesDrawingsContent;
    CChangesDrawingsContent.prototype.ReadFromBinary = function (reader) {
        reader.Seek2(reader.GetCurPos() - 4);
        this.Type = reader.GetLong();
        this.Add = reader.GetBool();
        CChangesDrawingsContent.superclass.ReadFromBinary.call(this, reader);
    };
    CChangesDrawingsContent.prototype.WriteToBinary = function (writer) {
        writer.WriteBool(this.IsAdd());
        CChangesDrawingsContent.superclass.WriteToBinary.call(this, writer);
    };

    CChangesDrawingsContent.prototype.private_WriteItem = function (Writer, Item) {
        Writer.WriteString2(Item.Get_Id());
    };
    CChangesDrawingsContent.prototype.private_ReadItem = function (Reader) {
        var Id = Reader.GetString2();
        return AscCommon.g_oTableId.Get_ById(Id);
    };


    CChangesDrawingsContent.prototype.private_GetChangedArray = function () {
        if (drawingContentChanges[this.Type]) {
            return drawingContentChanges[this.Type](this.Class);
        }
        return null;
    };

    CChangesDrawingsContent.prototype.private_GetContentChanges = function () {
        if (this.Class && this.Class.getContentChangesByType) {
            return this.Class.getContentChangesByType(this.Type);
        }
        return null;
    };

    CChangesDrawingsContent.prototype.private_InsertInArrayLoad = function () {
        if (this.PosArray.length <= 0 || this.Items.length <= 0)
            return;

        var aChangedArray = this.private_GetChangedArray();
        if (null !== aChangedArray) {
            var oContentChanges = this.private_GetContentChanges(), nPos;
            for (var i = 0; i < this.Items.length; ++i) {
                if (oContentChanges) {
                    nPos = oContentChanges.Check(AscCommon.contentchanges_Add, this.PosArray[i]);
                }
                else {
                    nPos = this.PosArray[i];
                }

                var oElement = this.Items[i];

                nPos = Math.min(nPos, aChangedArray.length);
                aChangedArray.splice(nPos, 0, oElement);
            }
        }
    };

    CChangesDrawingsContent.prototype.private_RemoveInArrayLoad = function () {

        var aChangedArray = this.private_GetChangedArray();
        if (null !== aChangedArray) {
            var oContentChanges = this.private_GetContentChanges(), nPos;
            for (var i = 0; i < this.Items.length; ++i) {
                if (oContentChanges) {
                    nPos = oContentChanges.Check(AscCommon.contentchanges_Remove, this.PosArray[i]);
                }
                else {
                    nPos = this.PosArray[i];
                }
                if (false === nPos) {
                    continue;
                }
                aChangedArray.splice(nPos, 1);
            }
        }
    };

    CChangesDrawingsContent.prototype.private_InsertInArrayUndoRedo = function () {
        var aChangedArray = this.private_GetChangedArray();
        if (null !== aChangedArray) {
            var nPos;
            for (var i = 0; i < this.Items.length; ++i) {
                nPos = Math.min(this.Pos + i, aChangedArray.length);
                aChangedArray.splice(nPos, 0, this.Items[i]);
            }
        }
    };

    CChangesDrawingsContent.prototype.private_RemoveInArrayUndoRedo = function () {

        var aChangedArray = this.private_GetChangedArray();
        if (null !== aChangedArray) {
            for (var i = 0; i < this.Items.length; ++i) {
                aChangedArray.splice(this.Pos + i, 1);
            }
        }
    };

    CChangesDrawingsContent.prototype.Load = function () {
        if (this.IsAdd()) {
            this.private_InsertInArrayLoad();
        }
        else {
            this.private_RemoveInArrayLoad();
        }
    };

    CChangesDrawingsContent.prototype.Undo = function () {
        if (this.IsAdd()) {
            this.private_RemoveInArrayUndoRedo();
        }
        else {
            this.private_InsertInArrayUndoRedo();
        }
    };

    CChangesDrawingsContent.prototype.Redo = function () {
        if (this.IsAdd()) {
            this.private_InsertInArrayUndoRedo();
        }
        else {
            this.private_RemoveInArrayUndoRedo();
        }
    };
    CChangesDrawingsContent.prototype.IsContentChange = function () {
        return false;
    };


    function CChangesDrawingsContentNoId(Class, Type, Pos, Items, isAdd){
        CChangesDrawingsContentNoId.superclass.constructor.call(this, Class, Type, Pos, Items, isAdd);
    }

    AscCommon.extendClass(CChangesDrawingsContentNoId, AscDFH.CChangesDrawingsContent);

    CChangesDrawingsContentNoId.prototype.private_WriteItem = function (Writer, Item) {
        Item.Write_ToBinary(Writer);
    };
    CChangesDrawingsContentNoId.prototype.private_ReadItem = function (Reader) {
        var oItem = null;
        if(drawingConstructorsMap[this.Type]){
            oItem = new drawingConstructorsMap[this.Type]();
            oItem.Read_FromBinary(Reader);
        }
        return oItem;
    };
    window['AscDFH'].CChangesDrawingsContentNoId = CChangesDrawingsContentNoId;

    function CChangesDrawingsContentLong(Class, Type, Pos, Items, isAdd){
        CChangesDrawingsContentLong.superclass.constructor.call(this, Class, Type, Pos, Items, isAdd);
    }

    AscCommon.extendClass(CChangesDrawingsContentLong, AscDFH.CChangesDrawingsContent);

    CChangesDrawingsContentLong.prototype.private_WriteItem = function (Writer, Item) {
        Writer.WriteLong(Item);
    };
    CChangesDrawingsContentLong.prototype.private_ReadItem = function (Reader) {
        return Reader.GetLong();
    };
    window['AscDFH'].CChangesDrawingsContentLong = CChangesDrawingsContentLong;


    function CChangesDrawingsContentLongMap(Class, Type, Pos, Items, isAdd){
        CChangesDrawingsContentLongMap.superclass.constructor.call(this, Class, Type, Pos, Items, isAdd);
    }
    AscCommon.extendClass(CChangesDrawingsContentLongMap, AscDFH.CChangesDrawingsContentLong);


    CChangesDrawingsContentLongMap.prototype.private_InsertInArrayLoad = function () {
        if (this.PosArray.length <= 0 || this.Items.length <= 0)
            return;
        var aChangedArray = this.private_GetChangedArray();
        if (null !== aChangedArray) {
            for (var i = 0; i < this.Items.length; ++i) {
                aChangedArray[this.PosArray[i]] = this.Items[i];
            }
        }
    };

    CChangesDrawingsContentLongMap.prototype.private_RemoveInArrayLoad = function () {

        var aChangedArray = this.private_GetChangedArray();
        if (null !== aChangedArray) {
            for (var i = 0; i < this.PosArray.length; ++i) {
                aChangedArray[this.PosArray[i]] = null;
            }
        }
    };

    CChangesDrawingsContentLongMap.prototype.private_InsertInArrayUndoRedo = function () {
        var aChangedArray = this.private_GetChangedArray();
        if (null !== aChangedArray) {
            for (var i = 0; i < this.Items.length; ++i) {
                aChangedArray[this.Pos + i] = this.Items[i];
            }
        }
    };

    CChangesDrawingsContentLongMap.prototype.private_RemoveInArrayUndoRedo = function () {
        var aChangedArray = this.private_GetChangedArray();
        if (null !== aChangedArray) {
            for (var i = 0; i < this.Items.length; ++i) {
                aChangedArray[this.Pos + i] = null;
            }
        }
    };

    window['AscDFH'].CChangesDrawingsContentLongMap = CChangesDrawingsContentLongMap;


    function CChangesDrawingChangeTheme(Class, Type, aIndexes){
        this.Type = Type;
        this.aIndexes = aIndexes;
        CChangesDrawingChangeTheme.superclass.constructor.call(this, Class);
    }

    AscCommon.extendClass(CChangesDrawingChangeTheme, AscDFH.CChangesBase);

    CChangesDrawingChangeTheme.prototype.WriteToBinary = function(Writer){
        Writer.WriteLong(this.aIndexes.length);
        for(var i = 0; i < this.aIndexes.length; ++i){
            Writer.WriteLong(this.aIndexes[i]);
        }
    };

    CChangesDrawingChangeTheme.prototype.ReadFromBinary = function(Reader){
        this.aIndexes = [];
        var nLength = Reader.GetLong();
        for(var i = 0; i < nLength; ++i){
            this.aIndexes.push(Reader.GetLong());
        }
    };

    CChangesDrawingChangeTheme.prototype.Do = function () {
        var aSlides = this.Class.Slides;
        for(var i = 0; i < this.aIndexes.length; ++i)
        {
            aSlides[this.aIndexes[i]] && aSlides[this.aIndexes[i]].checkSlideTheme();
        }
    };

    CChangesDrawingChangeTheme.prototype.Undo = function(){
        this.Do();
    };

    CChangesDrawingChangeTheme.prototype.Redo = function(){
        this.Do();
    };


    window['AscDFH'].CChangesDrawingChangeTheme = CChangesDrawingChangeTheme;


    function CChangesDrawingTimingLocks(Class, deleteLock, backgroundLock, timingLock, transitionLock, layoutLock){
        this.Type = AscDFH.historyitem_SlideSetLocks;
        this.deleteLock = deleteLock;
        this.backgroundLock = backgroundLock;
        this.timingLock = timingLock;
        this.transitionLock = transitionLock;
        this.layoutLock = layoutLock;
        CChangesDrawingTimingLocks.superclass.constructor.call(this, Class);
    }

    AscCommon.extendClass(CChangesDrawingTimingLocks, AscDFH.CChangesBase);

    CChangesDrawingTimingLocks.prototype.WriteToBinary = function(Writer){
        AscFormat.writeObject(Writer, this.deleteLock);
        AscFormat.writeObject(Writer, this.backgroundLock);
        AscFormat.writeObject(Writer, this.timingLock);
        AscFormat.writeObject(Writer, this.transitionLock);
        AscFormat.writeObject(Writer, this.layoutLock);
    };

    CChangesDrawingTimingLocks.prototype.ReadFromBinary = function(Reader){
        this.deleteLock = AscFormat.readObject(Reader);
        this.backgroundLock = AscFormat.readObject(Reader);
        this.timingLock = AscFormat.readObject(Reader);
        this.transitionLock = AscFormat.readObject(Reader);
        this.layoutLock = AscFormat.readObject(Reader);
    };

    CChangesDrawingTimingLocks.prototype.Undo = function(){
        var oSlide = this.Class;
        oSlide.deleteLock = null;
        oSlide.backgroundLock = null;
        oSlide.timingLock = null;
        oSlide.transitionLock = null;
        oSlide.layoutLock = null;
    };

    CChangesDrawingTimingLocks.prototype.Redo = function(){
        var oSlide = this.Class;
         oSlide.deleteLock = this.deleteLock;
         oSlide.backgroundLock = this.backgroundLock;
         oSlide.timingLock = this.timingLock;
         oSlide.transitionLock = this.transitionLock;
         oSlide.layoutLock = this.layoutLock;
    };

    window['AscDFH'].CChangesDrawingTimingLocks = CChangesDrawingTimingLocks;


    function CChangesSparklinesChangeData(Class, OldPr, NewPr){
        this.Type = AscDFH.historyitem_Sparkline_ChangeData;
        this.OldPr = OldPr;
        this.NewPr = NewPr;
        CChangesSparklinesChangeData.superclass.constructor.call(this, Class);
    }
    AscCommon.extendClass(CChangesSparklinesChangeData, AscDFH.CChangesBase);



    CChangesSparklinesChangeData.prototype.WritePr = function(Writer, Pr){
        var bIsArray = Array.isArray(Pr) ;
        Writer.WriteBool(bIsArray);
        if(bIsArray){
            Writer.WriteLong(Pr.length);
            for(var i = 0; i < Pr.length; ++i){
                Writer.WriteLong(Pr[i].sqref.c1);
                Writer.WriteLong(Pr[i].sqref.r1);
                Writer.WriteString2(Pr[i].f);
            }
        }
    };

    CChangesSparklinesChangeData.prototype.ReadPr = function(Reader){
        var bIsArray = Reader.GetBool();
        var RetPr = null;
        if(bIsArray){
            var nLength = Reader.GetLong();
            RetPr = [];
            for(var i = 0; i < nLength; ++i){
                var oSparkline = new AscCommonExcel.sparkline();
                var col = Reader.GetLong();
                var row = Reader.GetLong();
                oSparkline.sqref = new Asc.Range(col, row, col, row);
                oSparkline.setF(Reader.GetString2());
                RetPr.push(oSparkline);
            }
        }
        return RetPr;
    };

    CChangesSparklinesChangeData.prototype.WriteToBinary = function(Writer){
        this.WritePr(Writer, this.OldPr);
        this.WritePr(Writer, this.NewPr);
    };

    CChangesSparklinesChangeData.prototype.ReadFromBinary = function(Reader){
        this.OldPr = this.ReadPr(Reader);
        this.NewPr = this.ReadPr(Reader);
    };

    CChangesSparklinesChangeData.prototype.Fill = function(Pr){
        var aSparklines = this.Class.arrSparklines;
        aSparklines.length = 0;
        if(Array.isArray(Pr)){
            for(var i = 0; i < Pr.length; ++i){
                aSparklines.push(Pr[i].clone())
            }
        }
    };

    CChangesSparklinesChangeData.prototype.Undo = function(){
        this.Fill(this.OldPr);
    };

    CChangesSparklinesChangeData.prototype.Redo = function(){
        this.Fill(this.NewPr);
    };
    window['AscDFH'].CChangesSparklinesChangeData = CChangesSparklinesChangeData;



    function CChangesSparklinesRemoveData(Class, oSparkline){
        this.Type = AscDFH.historyitem_Sparkline_RemoveData;
        this.sparkline = oSparkline;
        CChangesSparklinesRemoveData.superclass.constructor.call(this, Class);
    }
    AscCommon.extendClass(CChangesSparklinesRemoveData, AscDFH.CChangesBase);


    CChangesSparklinesRemoveData.prototype.WriteToBinary = function(Writer){
        var bIsObject = AscCommon.isRealObject(this.sparkline);
        Writer.WriteBool(bIsObject);
        if(bIsObject){
            Writer.WriteLong(this.sparkline.sqref.c1);
            Writer.WriteLong(this.sparkline.sqref.r1);
            Writer.WriteString2(this.sparkline.f);
        }
    };
    CChangesSparklinesRemoveData.prototype.ReadFromBinary = function(Reader){
        var bIsObject = Reader.GetLong();
        if(bIsObject){
            this.sparkline = new AscCommonExcel.sparkline();
            var col = Reader.GetLong();
            var row = Reader.GetLong();
            this.sparkline.sqref = new Asc.Range(col, row, col, row);
            this.sparkline.setF(Reader.GetString2());
        }
    };

    CChangesSparklinesRemoveData.prototype.Undo = function(){
        this.Class.arrSparklines.push(this.sparkline);
    };
    CChangesSparklinesRemoveData.prototype.Redo = function(){
        this.Class.remove(this.sparkline.sqref);
    };


    window['AscDFH'].CChangesSparklinesRemoveData = CChangesSparklinesRemoveData;

    function CChangesDrawingsExcelColor(Class, Type, OldPr, NewPr){
        this.Type = Type;
        this.OldPr = OldPr;
        this.NewPr = NewPr;
        CChangesDrawingsExcelColor.superclass.constructor.call(this, Class);
    }
    AscCommon.extendClass(CChangesDrawingsExcelColor, AscDFH.CChangesBase);



    CChangesDrawingsExcelColor.prototype.WritePr = function(Writer, Pr){
        var bIsObject = AscCommon.isRealObject(Pr) ;
        Writer.WriteBool(bIsObject);
        if(bIsObject){
            Writer.WriteLong(Pr.getType());
            Pr.Write_ToBinary2(Writer);
        }
    };

    CChangesDrawingsExcelColor.prototype.ReadPr = function(Reader){
        var RetPr = null;
        var bIsObject = Reader.GetBool();
        if(bIsObject){
            switch (Reader.GetLong()) {
                case AscCommonExcel.UndoRedoDataTypes.RgbColor:
                    RetPr = new AscCommonExcel.RgbColor();
                    RetPr.Read_FromBinary2(Reader);
                    break;
                case AscCommonExcel.UndoRedoDataTypes.ThemeColor:
                    RetPr = new AscCommonExcel.ThemeColor();
                    RetPr = RetPr.Read_FromBinary2AndReplace(Reader);
                    break;
            }
        }
        return RetPr;
    };

    CChangesDrawingsExcelColor.prototype.WriteToBinary = function(Writer){
        this.WritePr(Writer, this.OldPr);
        this.WritePr(Writer, this.NewPr);
    };
    CChangesDrawingsExcelColor.prototype.ReadFromBinary = function(Reader){
        this.OldPr = this.ReadPr(Reader);
        this.NewPr = this.ReadPr(Reader);
    };

    CChangesDrawingsExcelColor.prototype.Undo = function(){
        this.Fill(this.OldPr);
    };

    CChangesDrawingsExcelColor.prototype.Redo = function(){
        this.Fill(this.NewPr);
    };
    CChangesDrawingsExcelColor.prototype.Fill = function(Pr){
        var oClass = this.Class;
        switch(this.Type){
            case AscDFH.historyitem_Sparkline_ColorSeries:
                oClass.colorSeries = Pr;
                break;
            case AscDFH.historyitem_Sparkline_ColorNegative:
                oClass.colorNegative = Pr;
                break;
            case AscDFH.historyitem_Sparkline_ColorAxis:
                oClass.colorAxis = Pr;
                break;
            case AscDFH.historyitem_Sparkline_ColorMarkers:
                oClass.colorMarkers = Pr;
                break;
            case AscDFH.historyitem_Sparkline_ColorFirst:
                oClass.colorFirst = Pr;
                break;
            case AscDFH.historyitem_Sparkline_colorLast:
                oClass.colorLast = Pr;
                break;
            case AscDFH.historyitem_Sparkline_ColorHigh:
                oClass.colorHigh = Pr;
                break;
            case AscDFH.historyitem_Sparkline_ColorLow:
                oClass.colorLow = Pr;
                break;
        }
    };
    AscDFH.CChangesDrawingsExcelColor = CChangesDrawingsExcelColor;

    function CChangesDrawingsSparklinesRemove(Class){
        this.Type = AscDFH.historyitem_Sparkline_RemoveSparkline;
        CChangesDrawingsSparklinesRemove.superclass.constructor.call(this, Class);
    }
    AscCommon.extendClass(CChangesDrawingsSparklinesRemove, AscDFH.CChangesBase);
    CChangesDrawingsSparklinesRemove.prototype.Undo = function(){
        if (this.Class.worksheet) {
            this.Class.worksheet.insertSparklineGroup(this.Class);
        }
    };
    CChangesDrawingsSparklinesRemove.prototype.Redo = function(){
        if (this.Class.worksheet) {
            this.Class.worksheet.removeSparklineGroup(this.Class.Get_Id());
        }
    };
    window['AscDFH'].CChangesDrawingsSparklinesRemove = CChangesDrawingsSparklinesRemove;

    function CChangesDrawingsSparklineRemoveData(Class, Col, Row){
        this.Type = AscDFH.historyitem_Sparkline_RemoveData;
        this.Col = Col;
        this.Row = Row;
        CChangesDrawingsSparklineRemoveData.superclass.constructor.call(this, Class);
    }
    CChangesDrawingsSparklineRemoveData.prototype.WriteToBinary = function(Writer){
        Writer.WriteLong(this.Col);
        Writer.WriteLong(this.Row);
    };
    CChangesDrawingsSparklineRemoveData.prototype.ReadFromBinary = function(Reader){
        this.Col = Reader.GetLong();
        this.Row = Reader.GetLong();
    };

    CChangesDrawingsSparklineRemoveData.prototype.Undo = function(){

    };
    CChangesDrawingsSparklineRemoveData.prototype.Redo = function(){
        this.Class.remove(new Asc.Range(this.Col, this.Row, this.Col, this.Row));
    };



AscDFH.changesFactory[AscDFH.historyitem_Sparkline_Type               ] = AscDFH.CChangesDrawingsLong;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_LineWeight         ] = AscDFH.CChangesDrawingsDouble;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_DisplayEmptyCellsAs] = AscDFH.CChangesDrawingsLong;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_Markers            ] = AscDFH.CChangesDrawingsBool;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_High               ] = AscDFH.CChangesDrawingsBool;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_Low                ] = AscDFH.CChangesDrawingsBool;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_First              ] = AscDFH.CChangesDrawingsBool;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_Last               ] = AscDFH.CChangesDrawingsBool;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_Negative           ] = AscDFH.CChangesDrawingsBool;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_DisplayXAxis       ] = AscDFH.CChangesDrawingsBool;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_DisplayHidden      ] = AscDFH.CChangesDrawingsBool;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_MinAxisType        ] = AscDFH.CChangesDrawingsLong;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_MaxAxisType        ] = AscDFH.CChangesDrawingsLong;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_RightToLeft        ] = AscDFH.CChangesDrawingsBool;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_ManualMax          ] = AscDFH.CChangesDrawingsDouble;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_ManualMin          ] = AscDFH.CChangesDrawingsDouble;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_DateAxis           ] = AscDFH.CChangesDrawingsBool;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_F                  ] = AscDFH.CChangesDrawingsString;


AscDFH.changesFactory[AscDFH.historyitem_Sparkline_ColorSeries        ] = AscDFH.CChangesDrawingsExcelColor;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_ColorNegative      ] = AscDFH.CChangesDrawingsExcelColor;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_ColorAxis          ] = AscDFH.CChangesDrawingsExcelColor;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_ColorMarkers       ] = AscDFH.CChangesDrawingsExcelColor;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_ColorFirst         ] = AscDFH.CChangesDrawingsExcelColor;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_colorLast          ] = AscDFH.CChangesDrawingsExcelColor;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_ColorHigh          ] = AscDFH.CChangesDrawingsExcelColor;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_ColorLow           ] = AscDFH.CChangesDrawingsExcelColor;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_ChangeData]          = AscDFH.CChangesSparklinesChangeData;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_RemoveData]          = AscDFH.CChangesSparklinesRemoveData;
AscDFH.changesFactory[AscDFH.historyitem_Sparkline_RemoveSparkline]     = AscDFH.CChangesDrawingsSparklinesRemove;

    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_Type               ] = function(oClass, value){oClass.type                = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_LineWeight         ] = function(oClass, value){oClass.lineWeight          = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_DisplayEmptyCellsAs] = function(oClass, value){oClass.displayEmptyCellsAs = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_Markers            ] = function(oClass, value){oClass.markers             = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_High               ] = function(oClass, value){oClass.high                = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_Low                ] = function(oClass, value){oClass.low                 = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_First              ] = function(oClass, value){oClass.first               = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_Last               ] = function(oClass, value){oClass.last                = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_Negative           ] = function(oClass, value){oClass.negative            = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_DisplayXAxis       ] = function(oClass, value){oClass.displayXAxis        = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_DisplayHidden      ] = function(oClass, value){oClass.displayHidden       = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_MinAxisType        ] = function(oClass, value){oClass.minAxisType         = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_MaxAxisType        ] = function(oClass, value){oClass.maxAxisType         = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_RightToLeft        ] = function(oClass, value){oClass.rightToLeft         = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_ManualMax          ] = function(oClass, value){oClass.manualMax           = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_ManualMin          ] = function(oClass, value){oClass.manualMin           = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_DateAxis           ] = function(oClass, value){oClass.dateAxis            = value;};
    AscDFH.drawingsChangesMap[AscDFH.historyitem_Sparkline_F                  ] = function(oClass, value){oClass.f                   = value;};

})(window);