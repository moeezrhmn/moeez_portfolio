<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('quote_requests', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->text('industry_or_buisness');
            $table->string('organization_type')->nullable();
            $table->longText('primary_goal_of_project');
            $table->longText('links')->nullable();
            $table->float('budget');
            $table->integer('number_of_pages')->nullable();
            $table->longText('brief_of_requirements')->nullable();
            $table->string('relevant_file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quote_requests');
    }
};
