<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuoteRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'industry_or_buisness',
        'organization_type',
        'primary_goal_of_project',
        'links',
        'budget',
        'number_of_pages',
        'brief_of_requirements',
        'relevant_file',
    ];
}
