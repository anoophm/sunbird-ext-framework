import { NgModule } from "@angular/core";
import { ContainerService } from "./container/container.services";
import { ContentService } from "./services/content/content.service";
import { EventService } from "./services/event/event.service";
import { TelemetryService } from "./services/telemetry/telemetry.service";
import { ServiceProvider } from "./services/factory";
import { GenieSDKServiceProvider } from "./services/geniesdk.service";
import { OAuthService } from "./services/auth/oauth.service";
import { TabsPage } from "./container/tabs/tabs";
import { AuthService } from "./services/auth/auth.service";
import { ProfileService } from "./services/profile/profile.service";
import { CourseService } from "./services/course/course.service"
import { UserProfileService } from "./services/userprofile/userprofile.service";
import { PageAssembleService } from "./services/page/page.service";
import { PermissionService } from "./services/permission.sevice";
import { QRScanner } from "./services/qrscanner.service";
import { FrameworkService } from "./services/framework/framework.service";
import { FileUtil } from "./services/utils/file.service";
import { SharedPreferences } from "./services/utils/preferences.service";

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [
        ContainerService,
        ContentService,
        EventService,
        OAuthService,
        AuthService,
        ProfileService,
        CourseService,
        UserProfileService,
        FrameworkService,
        { provide: ServiceProvider, useClass: GenieSDKServiceProvider },
        TelemetryService,
        PageAssembleService,
        PermissionService,
        FileUtil,
        SharedPreferences,
        QRScanner
    ],
    exports: [
    ]
})
export class FrameworkModule {

}
