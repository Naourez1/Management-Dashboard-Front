export * from './userController.service';
import { UserControllerService } from './userController.service';
export * from './userGroup.service';
import { UserGroupService } from './userGroup.service';
export const APIS = [UserControllerService, UserGroupService];
