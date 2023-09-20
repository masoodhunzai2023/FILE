import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings' [contextMenuSettings]='contextMenuSettings'
    [detailsViewSettings]='detailsViewSettings' [view]='view' [navigationPaneSettings]='navigationPaneSettings'>
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings?: object;
    public view?: string;
    public navigationPaneSettings?: object;
    public enableRtl?: boolean;
    public toolbarSettings?: object;
    public contextMenuSettings?: object;
    public detailsViewSettings?: object;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';

    public ngOnInit(): void {

        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
        };
        this.enableRtl = true;
        this.view = "Details";
        this.contextMenuSettings = { file: ['Open', '|', 'Details'], folder: ['Open', '|', 'Details'], 
        layout: ['SortBy', 'View', 'Refresh', '|', 'Details', '|'], visible: true};
        this.detailsViewSettings = {
            columns: [
                {field: 'name', headerText: 'File Name', minWidth: 120, width: 'auto',
                customAttributes: { class: 'e-fe-grid-name' },
                template: '${name}'},
                {field: 'size', headerText: 'File Size',minWidth: 50, width: '110', template: '${size}'},
               { field: '_fm_modified', headerText: 'Date Modified',minWidth: 50, width: '190'},
            ]
        }
        this.navigationPaneSettings = { maxWidth: '850px', minWidth: '140px', visible: true}
    };
  }