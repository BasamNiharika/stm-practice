import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'modules',
        pathMatch:'full',
        loadComponent:()=>{
            return import('./modules/modules.component').then(
                m=>m.ModulesComponent);
        },
    },
    {
        path:'trainees',
        pathMatch:'full',
        loadComponent:()=>{
            return import('./trainees/trainees.component').then(
                m=>m.TraineesComponent);
        }, 
    },
    {
        path:'trainers',
        pathMatch:'full',
        loadComponent:()=>{
            return import('./trainers/trainers.component').then(
                m=>m.TrainersComponent);
        },
    },
    {
        path:'marksheet',
        pathMatch:'full',
        loadComponent:()=>{
            return import('./marksheet/marksheet.component').then(
                m=>m.MarksheetComponent);
        },
    },
    {
        path:'share-point',
        pathMatch:'full',
        loadComponent:()=>{
            return import('./share-point/share-point.component').then(
                m=>m.SharePointComponent);
        },
    },
    {
        path:'programPlan',
        pathMatch:'full',
        loadComponent:()=>{
            return import('./modules/program-plan/program-plan.component').then(
                m=>m.ProgramPlanComponent);
        },
    }
];
